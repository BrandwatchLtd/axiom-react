/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const config = require('../config');
const server = express();
const generate = require('../scripts/component-docs');

server.use(`/${config.output.folderName}`, express.static(config.output.folderName));
server.use('/assets', express.static('docs/assets'));

server.get('*', (req, res) => {
  res.status(200).send(ejs.render(
    fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8'), {
      children: undefined,
      script: 'http://localhost:8080/lib/style-guide.client.js',
      stylesheet: undefined,
      __COMPONENT_DOCS__: JSON.stringify(generate()),
    }
  ));
});

server.listen(config.server.port, () => {
  console.info('==> ✅  Server is listening');
  console.info('==> 🌎  Go to http://%s:%s', config.server.hostname, config.server.port);
});
