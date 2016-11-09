const clean = require('./clean');
const buildClient = require('./buildClient');
const server = require('./server');

function production() {
  clean()
    .then(() => buildClient())
    .then(() => server());
}

production();
