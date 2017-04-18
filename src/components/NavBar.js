import React, { Component } from 'react';
import NavButton from '../components/NavButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../actions/playlists_action.js';
import { fetchUserInfo } from '../actions/userInfo_actions.js';

class NavBar extends Component {
  render() {
    return (
      <ul className="NavBar">
        <NavButton
          name="Home"
          link="/" />
        <NavButton
          name="User"
          link="/user" />
        <NavButton
          name="Playlists"
          link="/playlists" />
      </ul>
    )
  }
}

export default NavBar;