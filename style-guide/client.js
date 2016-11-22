import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

if (__INCLUDE_CSS__) {
  require('./client.scss');
}

render((
  <Router history={ browserHistory } routes={ routes } />
), document.getElementById('react-root'));
