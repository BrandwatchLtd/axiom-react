/* eslint-disable no-console */
const del = require('del');
const config = require('../config');
const isCalledDirectly = require('./isCalledDirectly');

function clean() {
  console.log('Ax:: Clean [1/2]');

  return del([`${config.paths.output}/**`, `!${config.paths.output}`])
    .then(() => console.log('Ax:: Clean [2/2]'));
}

if (isCalledDirectly(__dirname, 'clean')) {
  clean();
}

module.exports = clean;
