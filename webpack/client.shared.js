var config = require('../config');
var autoprefixer = require('autoprefixer');
var axiomSassVariableImporter = require('./utils/axiom-sass-variable-importer');

export default {
  entry: {
    axiom: ['babel-polyfill', './style-guide/client'],
    index: ['babel-polyfill', './docs'],
  },
  output: {
    path: config.output.folderName,
    filename: '[name].js',
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
  sassLoader: {
    importer: [
      axiomSassVariableImporter(),
    ],
  },
};
