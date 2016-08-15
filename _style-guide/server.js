/* eslint-disable no-console */

import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import * as config from '../config';
import createStore from './redux/createStore';
import createRoutes from './redux/createRoutes';
import { initialState as searchInitialState } from './reducers/search';
import { searchDocumentation } from './utils/documentation-search';
import Html from './components/Html';

try {
  const server = express();

  server.use(`/${config.output.folderName}`, express.static(config.output.folderName));
  server.use('/assets', express.static('static/assets'));
  server.use('/favicon.ico', express.static('static/favicon.ico'));
  server.use('/api/search', (req, res) => {
    res.status(200).json({
      results: searchDocumentation(req.query.q),
    });
  });

  server.get('*', (req, res) => {
    const initialState = {
      search: {
        ...searchInitialState,
        results: req.query.q ? searchDocumentation(req.query.q) : [],
      },
    };

    const store = createStore(initialState);
    const routes = createRoutes(store);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send({ error: error.message });
      } else if (redirectLocation) {
        res.status(302).redirect(redirectLocation.pathname);
      } else if (renderProps) {
        res.status(200).send(`
          <!doctype html>
          ${renderToString(
            <Html store={ store }>
              <Provider key="provider" store={ store }>
                <RouterContext { ...renderProps } store={ store } />
              </Provider>
            </Html>
          )}
        `);
      }
    });
  });

  server.listen(config.server.port, () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', config.server.hostname, config.server.port);
  });

  if (__DEVELOPMENT__) {
    if (module.hot) {
      console.log('[HMR] Waiting for server-side updates');

      // module.hot.accept('./redux/createRoutes', () => {
      //   routes = require('./redux/createRoutes').default(store);
      // });

      module.hot.addStatusHandler((status) => {
        if (status === 'abort') {
          setTimeout(() => process.exit(0), 0);
        }
      });
    }
  }
} catch (error) {
  console.error(error.stack || error);
}
