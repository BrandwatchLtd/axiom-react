import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

if (__INCLUDE_CSS__) {
  require('./client.scss');
}

if (typeof document !== 'undefined') {
  render((
    <Router history={ browserHistory } routes={ routes } />
  ), document.getElementById('react-root'));
}
