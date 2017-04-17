import React, { Component } from 'react';
import NavButton from '../components/NavButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../actions/playlists_action.js';

class NavBar extends Component {
  render() {
    console.log('pause');
    return (
      <ul className="NavBar">
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