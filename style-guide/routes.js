import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'style-guide/containers/App';
import Doc from 'style-guide/containers/Doc';

export default (
  <Route path="/">
    <Route component={ App }>
      <IndexRoute component={ Doc } />
      <Route component={ Doc } path="**/*" />
    </Route>
  </Route>
);
