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

  handleRunMonday() {
      fetch('/api/run_monday', {credentials: 'same-origin'}).then(response => {
          console.log(response.body);
      })
  };

    handleRunFriday() {
        fetch('/api/run_friday', {credentials: 'same-origin'}).then(response => {
            console.log('friday: ' + response.body);
        })
    };

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
        <button onClick={this.handleRunMonday}>Run monday</button>
          <button onClick={this.handleRunFriday}>Run friday</button>
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