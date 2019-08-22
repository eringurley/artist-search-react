import React from 'react';
import PropTypes from 'prop-types';

export default function Artist({ artist }) {
  return (
    <section>
      <p>{artist.name}</p>
      <p>{artist.id}</p>
    </section>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};
