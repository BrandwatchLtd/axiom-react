/* eslint-disable no-console */

const express = require('express');
const config = require('../config');
const server = express();

server.use(`/${config.output.folderName}`, express.static(config.output.folderName));
server.use('/assets', express.static('docs/assets'));
server.use('/favicon.ico', express.static('docs/favicon.ico'));

server.get('*', (req, res) => {
  res.status(200).sendFile('./dev.html', {
    root: __dirname,
  });
});

server.listen(config.server.port, () => {
  console.info('==> ✅  Server is listening');
  console.info('==> 🌎  Go to http://%s:%s', config.server.hostname, config.server.port);
});
