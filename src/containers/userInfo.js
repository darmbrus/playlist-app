import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../actions/userInfo_actions.js';
import { bindActionCreators } from 'redux'

class UserInfo extends Component {
  componentWillMount() {
    this.props.fetchUserInfo()
  }
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

function mapStateToProps({ user }) {
  return { user }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)