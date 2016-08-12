var loader = require('./loader.config');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var axiomSassVariableImporter = require('./utils/axiom-sass-variable-importer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('../config');

'use strict';

module.exports = {
  entry: {
    axiom: ['babel-polyfill', './style-guide/client'],
    index: ['babel-polyfill', './docs'],
  },
  output: {
    path: './lib',
    filename: '[name].js',
  },
  plugins: [new ExtractTextPlugin(config.output.css, {
    allChunks: true,
  }), new webpack.DefinePlugin({
    __INCLUDE_CSS__: true,
  })],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [loader.js, loader.style, loader.styleExtract],
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
  sassLoader: {
    importer: [
      axiomSassVariableImporter(),
    ],
  },
};
