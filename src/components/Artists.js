import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

export default function Artists({ artists }) {
  const artistsList = artists.map((artist, i) => (
    <li key={i}>
      <Artist artist={artist} />
    </li>
  ));
  return (
    <ul>{artistsList}</ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};
