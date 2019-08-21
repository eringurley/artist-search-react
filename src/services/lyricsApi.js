export const getLyrics = lyrics => {
  return fetch('https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>', {
    method: 'GET', 
    body: JSON.stringify({ lyrics: lyrics }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get lyrics from database';
      return console.log('Success!', json);
    });
};
