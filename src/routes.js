import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App.js';
import userInfo from './containers/userInfo.js';
import playlistList from './containers/playlist-list.js';
import AppInfo from './containers/appInfo.js';
import uriForm from './containers/uri-form.js'

export default (
  < Route path="/" component={App} >
    <IndexRoute component={AppInfo} />
    <Redirect from='/;*' to='/' />
    <Route path="user" component={userInfo} />
    <Route path="playlists" component={playlistList} />
    <Route path="uri" component={uriForm} />
  </Route>
);