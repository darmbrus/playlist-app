import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {
  renderUserInfoList() {
    if (this.props.user != null) {
      return (
        <li>User name: {this.props.user.id}</li>
      )
    }
    return <li></li>
  }

  render() {
    return (
      <ul>
        {this.renderUserInfoList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserInfo)