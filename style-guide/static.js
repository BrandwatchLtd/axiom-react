/* eslint-disable no-console */

import 'babel-polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import createRoutes from './redux/createRoutes';
import Html from './components/Html';
import { createMemoryHistory } from 'history';

export default (locals, callback) => {
  const initialState = {};
  const store = createStore(initialState);
  const routes = createRoutes(store);

  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const markup = `
      <!doctype html>
      ${renderToString(
        <Html store={ store }>
          <Provider key="provider" store={ store }>
            <RouterContext { ...renderProps } store={ store } />
          </Provider>
        </Html>
      )}
    `;
    callback(null, markup);
  });
};
