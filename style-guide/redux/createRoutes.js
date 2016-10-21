import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { navigationRouteEnter } from 'style-guide/actions/navigation';
import * as routes from 'style-guide/constants/Routing';
import App from 'style-guide/containers/App';
import Doc from 'style-guide/containers/Doc';
import { hasPathGotData, pathToRoute } from 'style-guide/utils/examples';

function onDocRouteEnter(dispatch) {
  return ({ location: { pathname } }, replace, next) => {
    if (hasPathGotData(pathname)) {
      dispatch(navigationRouteEnter(pathToRoute(pathname)));
    } else {
      replace({ pathname: `/${routes.NOT_FOUND}` });
    }

    next();
  };
}

export default function createRoutes(store) {
  const { dispatch } = store;

  return (
    <Route path="/">
      <Route component={ App }>
        <IndexRoute component={ Doc } />
        <Route component={ Doc } onEnter={ onDocRouteEnter(dispatch) } path="**/*" />
      </Route>
    </Route>
  );
}
