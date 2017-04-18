import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApiInfo } from '../actions/appInfo_actions.js';
import { APP_VERSION, API_ROOT } from '../index.js';

class AppInfo extends Component {
  componentWillMount() {
    this.props.fetchApiInfo();
  }

  renderAppProperties() {
    return (
      <ul>
        <li>App version: {APP_VERSION}</li>
      </ul>
    )
  }

  renderApiProperties() {
    if (this.props.apiInfo != null) {
      return (
        <ul>
          <li>Api version: {this.props.apiInfo.version}</li>
          <li>Api root: {API_ROOT}</li>
          <li>Cached user: {this.props.apiInfo.cached_user}</li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>Api version: Loading</li>
          <li>Cached user: Loading</li>
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Application information</h2>
        {this.renderAppProperties()}
        {this.renderApiProperties()}
      </div>
    )
  }
}

function mapStateToProps({ apiInfo }) {
  return { apiInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchApiInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInfo)