const  NUMBER_PAGE_COUNT  = 25;

const getTotalPages = count => Math.ceil(count / NUMBER_PER_PAGE);

const request = (url, page) => {
  const offset = (page - 1 ) * NUMBER_PER_PAGE;
  return fetch(`${url}&limit=${NUMBER_PER_PAGE}&offset=${offset}`)
    .then(res => {
      if(!res.ok) throw `Could not fetch ${url}`;
      return res.json();
    });
};

export const getArtists = (artists, page = 1) => {
  return request(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit, page`)
    .then(({ artists, count }) => ({
      artists: artists.map(artist => ({ id: artist.id, name: artist.name, disambiguation: artist.disambiguation })),
      totalPages: getTotalPages(count)
    }));
};

export const getReleases = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Could not get the releases.';
      return console.log('Successfully retrieved releases!'), res.json();
    });
};

export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
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
