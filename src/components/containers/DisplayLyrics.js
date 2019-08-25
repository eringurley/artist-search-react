import React, { Component } from 'react';
import { getLyrics } from '../../services/musicApi';

export default class DisplayLyrics extends Component {
  state = {
    lyrics: ''
  }

  componentDidMount() {
    getLyrics(this.props.match.params.artist, this.props.match.params.songTitle)
      .then(res => {
        this.setState({ lyrics: res.lyrics });
      });
  }
  
  render() {
    const { lyrics } = this.state;
    return (
      <>
        <p>{lyrics}</p>
      </>
    );
  }
}
