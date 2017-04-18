import React, { Component } from 'react';
import NavButton from '../components/NavButton.js'

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