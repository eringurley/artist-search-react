export const getArtists = (artist = 'nirvana', count = 25) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quotes';
      return json;
    });
};

// export const getSongs = songs => {
//   return fetch('http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch quotes';

//       return json;
//     });
// };

// export const getReleases = releases => {
//   return fetch('http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch quotes';

//       return json;
//     });
// };
// export const getCoverArt = coverArt => {
//   return fetch('http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch quotes';

//       return json;
//     });
// };
// export const getLyrics = lyrics => {
//   return fetch('https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch quotes';

//       return json;
//     });
// };
