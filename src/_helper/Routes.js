import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from '../App';
import Doc from '../Doc';

export default (
  <Route component={ App } path="/">
    <IndexRedirect to="index" />
    <Route component={ Doc } path="index" />
    <Route component={ Doc } path="**/*" />
  </Route>
);
