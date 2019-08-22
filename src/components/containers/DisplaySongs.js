import React, { Component } from 'react';
import Songs from '../songs/Songs';
import { getSongs } from '../../services/musicApi';

export default class DisplaySongs extends Component {
  state = {
    songs: []
  }

  componentDidMount() {
    getSongs(this.props.match.params.id)
      .then(res => {
        this.setState({ songs: res.recordings });
      });
  }
  
  render() {
    return (
      <>
        <Songs songs = {this.state.songs} />
      </>
    );
  }
}
