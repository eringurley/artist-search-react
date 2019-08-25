import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releases, artistName, songs }) {
  console.log(artistName)
  const releaseList = releases.map(release => (
    <li key={release.id}>
      <Release {...release } artistName={artistName} songs={songs}/>
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
    coverUrl: PropTypes.string.isRequired,
  })).isRequired,
  artistName:PropTypes.string,
  songs: PropTypes.array
};

export default Releases;


