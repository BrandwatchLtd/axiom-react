const clean = require('./clean');
const buildStatic = require('./buildStatic');
const buildClient = require('./buildClient');
const copy = require('copy');

function buildDocs() {
  clean()
    .then(() => buildClient())
    .then(() => {
      copy('lib/*', 'docs/lib', function() {});
      return;
    })
    .then(() => buildStatic());
}

buildDocs();
