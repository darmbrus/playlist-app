import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    if (this.props.activePlaylist == null) {
      return <div></div>
    }

    return (
      <div className="Content">
        <h1>Test Content</h1>
        <p>{this.props.activePlaylist.name}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activePlaylist: state.activePlaylist
  }
}

export default connect(mapStateToProps, null)(Content); 