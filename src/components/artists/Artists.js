import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

export default function Artists({ artists }) {
  const artistsList = artists.map(artist => (
    <li key={artist.id}>
      <Artist artist={artist} />
    </li>
  ));

  return (
    <ul>{artistsList}</ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
};
