export const getArtists = artist => {
  return fetch('http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25', {
    method: 'GEt', 
    body: JSON.stringify({ artist: artist }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get artist from database';
      return console.log('Success!', json);
    });
};
