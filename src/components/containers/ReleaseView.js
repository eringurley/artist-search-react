import React, { Component } from 'react';
import { getReleases } from '../../services/musicApi';
import Releases from '../releases/Releases';
import PropTypes from 'prop-types';
import { Paging } from '../Paging';

class DisplayReleases extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    setTotalPages: PropTypes.func.isRequired
  }
  state = {
    releases: []
  }

  fetch = () => {
    getReleases(this.props.match.params.id, this.props.page)
      .then(({ releases, totalPages }) => {
        this.setState({ releases });
        this.props.setTotalPages(totalPages);
      });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetch();
    }
  }
  
  render() {
    const { releases } = this.state;
    return (
      <>
        <h1>Releases for {this.props.match.params.artistName}</h1>
        
        <Releases releases={releases} artistName={this.props.match.params.artistName}/>
      </>
      // <>
      //   <Releases releases ={this.state.releases} artistName={this.props.match.params.artist} />
      // </>
    );
  }
}

export default Paging(DisplayReleases);

