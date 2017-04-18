import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const createStroreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const API_ROOT = "/api"
export const APP_VERSION = "0.1.0"

ReactDOM.render(
  <Provider store={createStroreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
