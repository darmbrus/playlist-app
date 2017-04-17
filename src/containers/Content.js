import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaylistList from './playlist-list.js'

class Content extends Component {
  selectHeader() {
    if (this.props.nav === "USER") {
      return (
        <h1>User</h1>
      )
    }

    return <h1>Playlists</h1>
  }

  selectContent() {
    if (this.props.nav === "USER") {
      return (
        <p>user details</p>
      )
    }
    return <PlaylistList />
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