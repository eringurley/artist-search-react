import React, { Component } from 'react';
import { getArtists } from '../../services/musicApi';
import Artists from '../artists/Artists';
import PropTypes from 'prop-types';
import Input from  '../Input';
import { Paging } from '../Paging';

class SearchView extends Component {
  static proptypes = {
    page: PropTypes.number.isRequired,
    setTotalPage: PropTypes.func.isRequied
  }

  state = {
    artists: [],
    artist: '',
    error: null,
    loading: false
  }

  fetch = () => {
    getArtists(this.state.artist, this.props.page)
      .then(({ artists, totalPages }) => {
        this.setState({ artists, loading: false });
        this.props.setTotalPages(totalPages);
      });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) { 
      this.fetch();
    }
  }

  inputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  onSearch = (event) => {
    event.preventDefault();
    this.fetch();
  }

  render() {
    const {
      artist,
      artists,
      loading,
      error
    } = this.state;

    if(error) return <h1>Errrrror</h1>;
    if(loading) return <h1>Looooooading</h1>;

    return (
    <>
      <Input 
        artist = {artist}
        inputChange = {this.inputChange}
        onSearch = {this.onSearch} 
      />
      <Artists
        artists = {artists}
      />
    </>
    );
  }
}


export default Paging(SearchView);
