import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import * as config from '../config';
import routes from './_helper/Routes';
import Html from './_helper/Html';

try {
  const server = express();

  server.use(`/${config.output.folderName}`, express.static(config.output.folderName));
  server.use(`/static`, express.static('./static'));

  server.get('*', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send({ error: error.message });
      } else if (redirectLocation) {
        res.status(302).redirect(redirectLocation.pathname);
      } else if (renderProps) {
        res.status(200).send(`<!doctype html>
          ${renderToString(
            <Html config={ config }>
              <RouterContext { ...renderProps } />
            </Html>
          )}
        `);
      }
    });
  });

  server.listen(config.server.port, () => {
    /* eslint-disable no-console */
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', config.server.hostname, config.server.port);
  });
} catch (error) {
  /* eslint-disable no-console */
  console.error(error.stack || error);
}
