import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchArtists extends Component {
  state = {
    artists: '',
    releases: '',
    songs: ''
  }

  render() {
    const { text } = this.state;
    return (
      <>
      Search: <input type="text" value={text} placeholder="Search by artist:"></input>
      </>
    );
  }
}

SearchArtists.propTypes = {
  text: PropTypes.string.isRequired
};

