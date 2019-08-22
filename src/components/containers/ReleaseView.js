import React, { Component } from 'react';
import { getReleases } from '../../services/musicApi';
import Releases from '../releases/Releases';
// import PropTypes from 'prop-types';

export default class DisplayReleases extends Component {
  state = {
    releases: []
  }

  componentDidMount() {
    getReleases(this.props.match.params.id)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  }
  
  render() {
    return (
      <>
        <Releases releases = {this.state.releases} />
      </>
    );
  }
}
