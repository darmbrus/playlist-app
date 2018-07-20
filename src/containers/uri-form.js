import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, createRandomPlaylist } from '../actions/playlists_action.js';
import { bindActionCreators } from 'redux';

import { postUri } from '../actions/uri_actions.js'

class UriForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    postUri(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Please enter a playlist URI:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ playlists }) {
  return { playlists };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UriForm)
