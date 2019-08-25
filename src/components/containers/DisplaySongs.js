import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from '../songs/Songs';
import { getSongs } from '../../services/musicApi';
import { Paging } from '../Paging';

class DisplaySongs extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    songs: []
  }
  
  componentDidMount = () => {
    return getSongs(this.props.match.params.id)
      .then((songs) => {
        console.log(songs,'songggg')
        this.setState({ songs: songs.recordings });
      });
  };

  render() {
    const { songs } = this.state;
    console.log(this.props.match.params, 'up in display')
    return (
      <>
      <h1>Releases for {this.props.match.params.releaseName}</h1>
        <Songs songs = {songs} artistName={this.props.match.params.artistName}/>
      </>
    );
  }
}

export default Paging(DisplaySongs);

