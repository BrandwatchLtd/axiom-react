import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import * as config from '../config';
import Html from './_helper/Html';

try {
  const server = express();

  server.use(`/${config.output.folderName}`, express.static(config.output.folderName));

  server.get('*', (req, res) => {
    if (req.url.startsWith('/docs/')) {
      res.status(200).send('Test');
    } else {
      res.status(200).send(`
        <!doctype html>
        ${renderToString(
          <Html></Html>
        )}
      `);
    }
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
