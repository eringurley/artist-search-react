import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songs }) {
  const songList = songs.map(song => {
    return (
      <li key={song.id}>
        <Song song={song} />
      </li>
    );
  });
  return (
    <ul>
      {songList}
    </ul>
  );
}

Songs.propTypes = {
  songs: PropTypes.array.isRequired
};

export default Songs;


