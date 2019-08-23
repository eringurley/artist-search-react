const  NUMBER_PAGE_COUNT  = 25;

const getTotalPages = count => Math.ceil(count /  NUMBER_PAGE_COUNT);

const request = (url, page) => {
  const offset = (page - 1) *  NUMBER_PAGE_COUNT;
  return fetch(`${url}&limit=${ NUMBER_PAGE_COUNT }&offset=${offset}`)
    .then(res => {
      if(!res.ok) throw `Could not fetch ${url}`;
      return res.json();
    });
};

export const getArtists = (artists, page = 1) => {
  return request(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit`, page)
    .then(({ artists, count }) => ({
      artists: artists.map(artist => ({ id: artist.id, name: artist.name, disambiguation: artist.disambiguation })),
      totalPages: getTotalPages(count)
    }));
};


export const getSongs = (id, page = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`, page) 
    .then(res => {
      if(!res.ok) throw 'Could not get the songs.';
      return console.log('Successfully retrieved songs!'), res.json();
    });
};

export const getLyrics = (artist, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(res => {
      if(!res.ok) throw 'Could not get the lyrics.';
      console.log('api fires');
      return res.json();
    });
};

export const getReleases = (id, page = 1) => {
  return request(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, page)
    .then(json => {
      const releases = json.releases.map(release => ({
        id: release.id,
        title: release.title,
        coverUrl: release['cover-art-archive'].front ?
          `http://coverartarchive.org/release/${release.id}/front-250` :
          'https://via.placeholder.com/250'
      }));

      return {
        releases,
        totalPages: getTotalPages(json['release-count'])
      };
    });
};
