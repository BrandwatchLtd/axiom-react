import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory, Router } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';
import './client.css';

const browserHistory = useRouterHistory(createHistory)({
  basename: __BASENAME__,
});

render((
  <Router history={ browserHistory } routes={ routes } />
), document.getElementById('react-root'));
