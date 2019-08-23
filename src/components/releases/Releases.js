import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releases }) {
  const releaseList = releases.map(release => (
    <li key={release.id}>
      <Release {...release} />
    </li>
  ));

  return (
    <ul>
      {releaseList}
    </ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    coverUrl: PropTypes.string.isRequired
  })).isRequired
  // artist:PropTypes.string
};

export default Releases;


