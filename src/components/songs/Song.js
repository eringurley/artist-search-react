import React from 'react';
import PropTypes from 'prop-types';

function Song({ song }) {
  return (
    <section>
      <p>{song.title}</p>
    </section>
  );
}


Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default Song;
