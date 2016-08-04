import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App from '../App';
import Doc from '../Doc';

const Routes = () => (
  <Router history={ browserHistory }>
    <Route component={ App } path="/">
      <IndexRedirect to="index" />
      <Route component={ Doc } path="index" />
      <Route component={ Doc } path="**/*" />
    </Route>
  </Router>
);

export default Routes;
