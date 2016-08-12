const createSassVariableImporter = require('./sass-variable-importer');
const config = require('./_config');

module.exports = function() {
  return createSassVariableImporter(config.AXIOM_SASS_VARIABLE_FORMAT);
};
