export const getSongs = song => {
  return fetch('http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json', {
    method: 'GET', 
    body: JSON.stringify({ song: song }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get song from database';
      return console.log('Success!', json);
    });
};
