import React, { Component } from 'react';
import Artists from '../Artists';
import { getArtists } from '../../services/musicApi';

export default class ArtistList extends Component {
  
  state = {
    artists: []
  }

  fetchArtists = () => {
    getArtists()
      .then(artists => this.setState({ artists:artists.artists }));
  }

  componentDidMount() {
    this.fetchArtists();
  }

  render() {
    const { artists } = this.state;
    return <Artists artists={artists} />;
  }
}
