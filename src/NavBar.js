import React from 'react';
import NavButton from './NavButton.js'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      data: ""
    }
  }

  onClick(newData) {
    this.setState({
      data: newData
    });
  }

  render() {
    return (
      <ul className="NavBar">
        <NavButton name="Playlists" onClick={this.onClick}/>
        <NavButton name="Create discover weekly" onClick={this.onClick}/>
      </ul>
    )
  }
}

export default NavBar;
