const clean = require('./clean');
const buildStatic = require('./buildStatic');
const buildClient = require('./buildClient');
const copy = require('copy');

function buildDocs() {
  clean()
    .then(() => buildClient())
    .then(() => {
      copy('lib/*', 'docs/lib', function(error) {
        if (error) {
          throw error;
        }
      });
      return;
    })
    .then(() => {
      copy('assets/*', 'docs/assets', function(error) {
        if (error) {
          throw error;
        }
      });
      return;
    })
    .then(() => buildStatic());
}

buildDocs();
