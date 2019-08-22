import React from 'react';
import PropTypes from 'prop-types';

function Input({ artist, inputChange, onSearch }) {
  return (
    <>
      <input type="text" name="artist" value={artist} onChange={inputChange} />
      <button onClick={onSearch}>Search</button>
    </>
  );
}

Input.propTypes = {
  artist: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Input;
