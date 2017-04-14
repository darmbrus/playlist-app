import React from 'react';
import NavButton from './NavButton.js'

class NavBar extends React.Component {
  render() {
    return (
      <ul className="NavBar">
        <NavButton name="testName" link="google"/>
        <NavButton name="Test Name 2" link="yahoo"/>
      </ul>
    )
  }
}

export default NavBar;
