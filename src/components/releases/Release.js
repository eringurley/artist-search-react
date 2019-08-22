import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ release, artist }) {
  return (
    <Link to={`/release/${artist}/${release.title}/${release.id}`}>
      <p>{release.title}</p>
    </Link>
  );
}


Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string
  }),
  artist:PropTypes.string
};

export default Release;
