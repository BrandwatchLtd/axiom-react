const clean = require('./clean');
const watchClient = require('./watch-client');
const watchServer = require('./watch-server');
const server = require('./server');
const config = require('../config');

function start() {
  clean()
    .then(() => watchServer())
    .then(() => watchClient())
    .then(() => server(config.output.styleGuide.serverDevJSFilename));
}

start();
