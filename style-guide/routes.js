import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Doc from './containers/Doc';
import Labs from './containers/Labs';

export default (
  <Route path="/">
    <Route component={ App }>
      <IndexRoute component={ Doc } />
      <Route component={ Labs } path="labs" />
      <Route component={ Doc } path="**/*" />
    </Route>
  </Route>
);
