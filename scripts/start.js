const clean = require('./clean');
const watchClient = require('./watch-client');
const server = require('./server');
const buildClient = require('./buildClient');

function start() {
  clean()
    .then(() => buildClient())
    .then(() => watchClient())
    .then(() => server());
}

start();
