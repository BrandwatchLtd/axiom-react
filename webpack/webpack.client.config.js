var loader = require('./loader.config');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var axiomSassVariableImporter = require('../utils/axiom-sass-variable-importer');
var config = require('../config');

'use strict';

module.exports = {
  entry: {
    axiom: ['babel-polyfill', './src/client'],
    index: ['babel-polyfill', './docs'],
  },
  output: {
    path: './lib',
    filename: '[name].js',
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [loader.js, loader.style],
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
  sassLoader: {
    importer: [
      axiomSassVariableImporter(config.webpack.aliases),
    ],
  },
  plugins: [new webpack.DefinePlugin({
    __INCLUDE_CSS__: true,
  })],
};
