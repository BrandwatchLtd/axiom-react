/* eslint-disable no-console */

import 'babel-polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createMemoryHistory } from 'history';
import Html from './components/Html';
import routes from './routes';

export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const markup = `
      <!doctype html>
      ${renderToString(
        <Html>
          <RouterContext { ...renderProps } />
        </Html>
      )}
    `;
    callback(null, markup);
  });
};
