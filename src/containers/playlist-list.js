import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlaylistList extends Component {
  renderList() {
    return this.props.playlists.map((playlist) => {
      return (<li key={playlist.name}>{playlist.name}</li>)
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

export default connect(mapStateToProps)(PlaylistList)
