export const getCoverArt = coverArt => {
  return fetch('http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json', {
    method: 'GET', 
    body: JSON.stringify({ coverArt: coverArt }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get cover art from database';
      return console.log('Success!', json);
    });
};
