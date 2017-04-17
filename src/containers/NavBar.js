import React, { Component } from 'react';
import NavButton from '../components/NavButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../actions/playlists_action.js';
import { navSelectHome, navSelectUser, navSelectPlaylist } from '../actions/navBar_action.js';
import { fetchUserInfo } from '../actions/userInfo_actions.js';

class NavBar extends Component {
  runPlaylist() {
    this.props.navSelectPlaylist();
    this.props.fetchPlaylists();
  }

  runUser() {
    this.props.fetchUserInfo();
    this.props.navSelectUser();
  }

  render() {
    return (
      <ul className="NavBar">
        <NavButton
          name="Home"
          onClick={() => this.props.navSelectHome()} />
        <NavButton
          name="User"
          onClick={() => this.runUser()} />
        <NavButton
          name="Playlists"
          onClick={() => this.runPlaylist()} />
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUserInfo: fetchUserInfo,
    fetchPlaylists: fetchPlaylists,
    navSelectUser: navSelectUser,
    navSelectPlaylist: navSelectPlaylist,
    navSelectHome: navSelectHome
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)