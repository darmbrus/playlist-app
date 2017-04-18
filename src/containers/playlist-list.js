import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRandomPlaylist } from '../actions/playlists_action.js';
import { bindActionCreators } from 'redux';

class PlaylistList extends Component {
  renderList(playlists) {
    if (playlists == null) {
      return <div></div>
    }
    return playlists.map((playlist) => {
      return (
        <li key={playlist.name}>
          <a
            onClick={() => this.props.createRandomPlaylist(playlist)}>
            {playlist.name}
          </a>
        </li>
      )
    });
  }

  render() {
    return (
      <ul>
        {this.renderList(this.props.playlists)}
      </ul>
    )
  }
}

function mapStateToProps({ playlists }) {
  return { playlists };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createRandomPlaylist: createRandomPlaylist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList)
