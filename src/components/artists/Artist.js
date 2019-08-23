import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ artist }) {
  return (
    <Link to={`/artist/${artist.name}/${artist.id}`}>
      <section>
        <p>{artist.name}</p>
        <p>{artist.disambiguation} || `No description available for ${artist.id}`</p>
      </section>
    </Link>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    disambiguation: PropTypes.string,
    id: PropTypes.string.isRequired
  })
};

export default Artist;
