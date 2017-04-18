import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, createRandomPlaylist } from '../actions/playlists_action.js';
import { bindActionCreators } from 'redux';

class PlaylistList extends Component {
  componentWillMount() {
    this.props.fetchPlaylists();
  }

  renderList(playlists) {
    if (playlists == null) {
      return <div>Loading...</div>
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
      <div>
        <h2>Current user's playlists:</h2>
        <ul>
          {this.renderList(this.props.playlists)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ playlists }) {
  return { playlists };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createRandomPlaylist: createRandomPlaylist,
    fetchPlaylists: fetchPlaylists
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList)
