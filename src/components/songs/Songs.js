import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songs, artistName }) {
  const songList = songs.map(song => {
    return (
      <li key={song.id}>
        <Song song={song} artistName={artistName} />
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
  songs: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Songs;


