const clean = require('./clean');
const buildClient = require('./buildClient');
const buildServer = require('./buildServer');
const server = require('./server');
const config = require('../config');

function production() {
  clean()
    .then(() => buildServer())
    .then(() => buildClient())
    .then(() => server(config.output.styleGuide.serverProdJSFilename));
}

production();
