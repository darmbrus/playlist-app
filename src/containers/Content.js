import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaylistList from './playlist-list.js';
import UserInfo from './userInfo.js';

class Content extends Component {
  selectHeader() {
    if (this.props.nav === "USER") {
      return (
        <h1>User</h1>
      )
    } else if (this.props.nav === "PLAYLIST") {
      return <h1>Playlists</h1>
    } else {
      return <h1>Application Info</h1>
    }
  }

  selectContent() {
    if (this.props.nav === "USER") {
      return (
        <UserInfo />
      )
    } else if (this.props.nav === "PLAYLIST") {
      return <PlaylistList />
    } else {
      return <p>Application Info: v0.0.1</p>
    }

  }

  render() {
    return (
      <div className="Content">
        {this.selectHeader()}
        {this.selectContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps, null)(Content); 