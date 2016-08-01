import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App from './App';
import Doc from './Doc';

render((
  <Router history={ browserHistory }>
    <Route component={ App } path="/">
      <Route path="docs">
        <IndexRedirect to="/axiom/about" />
        <Route component={ Doc } path="**/*" />
      </Route>
    </Route>
  </Router>
), document.getElementById('react-root'));
