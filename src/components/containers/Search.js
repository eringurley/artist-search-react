import React, { Component } from 'react';
import { getArtists } from '../../services/musicApi';
import Artists from '../Artists';
import Input from  '../Input';

export default class SearchArtists extends Component {
  state = {
    artists: [],
    artist: '',
  }

  inputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  getArtists = () => {
    getArtists(this.state.artist)
      .then(({ artists }) => {
        this.setState({ artists });
      });
  }

  onSearch = () => {
    return this.getArtists();
  }

  render() {
    return (
    <>
      <Input 
        artist = {this.state.artist}
        inputChange = {this.inputChange}
        onSearch = {this.onSearch} 
      />
      <Artists
        artists = {this.state.artists}
      />
    </>
    );
  }
}
