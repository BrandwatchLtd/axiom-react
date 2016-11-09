/* eslint-disable no-console */
const forever = require('forever');
const config = require('../config');

module.exports = function server() {
  console.log('Ax:: Starting server...');

  return forever.start(config.entries.styleGuide.server, {
    minUptime: 1000,
    spinSleepTime: 1000,
  });
};
