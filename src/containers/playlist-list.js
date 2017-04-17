import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlaylist } from '../actions/index';
import { bindActionCreators } from 'redux';

class PlaylistList extends Component {
  renderList() {
    if (this.props.playlists == null) {
      return <div></div>
    }

    return this.props.playlists.map((playlist) => {
      return (<li
        onClick={() => this.props.selectPlaylist(playlist)}
        key={playlist.name}
      >{playlist.name}</li>)
    });
  }

  render() {
    return (
      <ul className="Content">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPlaylist: selectPlaylist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList)
