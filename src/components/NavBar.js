import React from 'react';
import NavButton from './NavButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPlaylists from '../actions/playlists_action.js';

class NavBar extends React.Component {
  runClick() {
    console.log('run click')
    this.props.fetchPlaylists()
  }

  render() {
    console.log('pause');
    return (
      <ul className="NavBar">
        <li
          onClick={this.runClick}
        >Test</li>
        <NavButton
          name="Playlists"
          onClick={() => this.props.fetchPlaylists()} />
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaylists: fetchPlaylists }, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)