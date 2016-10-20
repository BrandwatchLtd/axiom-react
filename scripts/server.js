/* eslint-disable no-console */
const path = require('path');
const forever = require('forever');
const config = require('../config');

module.exports = function server(filename) {
  console.log('Ax:: Starting server...');

  return forever.start(path.join(config.output.path, filename), {
    minUptime: 1000,
    spinSleepTime: 1000,
  });
};
