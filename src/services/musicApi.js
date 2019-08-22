export const getArtists = (artists) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'Could not get the artist.';
      return console.log('Successfully retieved artists!'), res.json();
    });
};

export const getReleases = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Could not get the releases.';
      return console.log('Successfully retieved releases!'), res.json();
    });
};

export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Could not get the songs.';
      return console.log('Successfully retieved songs!'), res.json();
    });
};

export const getLyrics = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => {
      if(!res.ok) throw 'Could not get the lyrics.';
      return console.log('Successfully retieved lyrics!'), res.json();
    });
};
