import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { navigationRouteEnter } from 'style-guide/actions/navigation';
import * as routes from 'style-guide/constants/Routing';
import App from 'style-guide/containers/App';
import Doc from 'style-guide/containers/Doc';
import YouAreLost from 'style-guide/containers/YouAreLost';
import { getFirstPath, hasPathGotData, pathToRoute } from 'style-guide/utils/examples';

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
      <IndexRedirect to={ getFirstPath() } />
      <Route component={ App }>
        <Route component={ YouAreLost } path={ routes.NOT_FOUND } />
        <Route path={ routes.DOCS }>
          <Route component={ Doc } onEnter={ onDocRouteEnter(dispatch) } path="**/*" />
        </Route>
      </Route>
    </Route>
  );
}
