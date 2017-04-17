import React, { Component } from 'react';
import NavButton from '../components/NavButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../actions/playlists_action.js';
import { navSelectUser, navSelectPlaylist } from '../actions/navBar_action.js'

class NavBar extends Component {
  runPlaylist() {
    console.log('runPlaylist');
    this.props.navSelectPlaylist();
    this.props.fetchPlaylists();
  }

  render() {
    console.log('pause');
    return (
      <ul className="NavBar">
        <NavButton
          name="User"
          onClick={() => this.props.navSelectUser()} />
        <NavButton
          name="Playlists"
          onClick={() => this.runPlaylist()} />
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPlaylists: fetchPlaylists,
    navSelectUser: navSelectUser,
    navSelectPlaylist: navSelectPlaylist
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)