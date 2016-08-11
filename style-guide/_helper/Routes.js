import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Doc from '../Doc';

// ToDO: Instead of IndexRoute use IndexRedirect to first best path from docStructure

export default (
  <Route component={ App } path="/">
    <IndexRoute component={ Doc } />
    <Route component={ Doc } path="**/*" />
  </Route>
);
