import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ id, title, coverUrl }) {
  return (
    <Link to={`/release/${id}/${title}/$`}>
      <img src={coverUrl} />
      <p>{title}</p>
      <p>{id}</p>
    </Link>
  );
}
  
  
Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired
};
  
export default Release;
