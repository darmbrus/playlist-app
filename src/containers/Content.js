import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../actions/index';

class Content extends Component {
  render() {
    if (this.props.activePlaylist == null) {
      return <div></div>
    }

    return (
      <div className="Content">
        <h1>Test Content</h1>
        <p>{this.props.activePlaylist.name}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activePlaylist: state.activePlaylist
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaylists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content); 