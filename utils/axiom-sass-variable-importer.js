const createSassVariableImporter = require('./sass-variable-importer');
const { AXIOM_SASS_VARIABLE_FORMAT } = require('./_config');

module.exports = (aliases) => createSassVariableImporter(AXIOM_SASS_VARIABLE_FORMAT, aliases);
