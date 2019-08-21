export const getSongs = songs => {
  return fetch('http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json', {
    method: 'GET', 
    body: JSON.stringify({ songs: songs }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get songs from database';
      return console.log('Success!', json);
    });
};
