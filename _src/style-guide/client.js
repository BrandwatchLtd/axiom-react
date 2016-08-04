import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './redux/createStore';
import createRoutes from './redux/createRoutes';
import createDevTools from './redux/createDevTools';

if (__CLIENT__) {
  require('./style/index.scss');
}

const DevTools = createDevTools();
const store = createStore(window.__data);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

if (__DEVELOPMENT__) {
  render(
    <DevTools store={ store } />,
    document.getElementById('dev-tools')
  );
}

render((
  <Provider key="provider" store={ store } >
    <Router history={ history } routes={ routes } />
  </Provider>
), document.getElementById('react-root'));
