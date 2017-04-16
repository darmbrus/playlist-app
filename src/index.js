import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStroreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStroreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
