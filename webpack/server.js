var loader = require('./loader.config');
var webpack = require('webpack');
var webpackNodeExternals = require('webpack-node-externals');
var config = require('../config');

'use strict';

module.exports = {
  target: 'node',
  entry: {
    server: ['babel-polyfill', './style-guide/server'],
  },
  devtool: 'source-map',
  output: {
    path: config.output.folderName,
    filename: '[name].js',
  },
  module: {
    loaders: [loader.js],
  },
  externals: [webpackNodeExternals()],
  plugins: [new webpack.DefinePlugin({
    __INCLUDE_CSS__: false,
  })],
};
