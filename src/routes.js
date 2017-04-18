import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App.js';
import userInfo from './containers/userInfo.js';
import playlistList from './containers/playlist-list.js';
import index from './components/index.js'

export default (
  < Route path="/" component={App} >
    <IndexRoute component={index} />
    <Redirect from='/;*' to='/' />
    <Route path="main" component={index} />
    <Route path="user" component={userInfo} />
    <Route path="playlists" component={playlistList} />
  </Route>
);