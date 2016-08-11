var loader = require('./loader.config');
var webpack = require('webpack');
var webpackNodeExternals = require('webpack-node-externals');

'use strict';

module.exports = {
  target: 'node',
  entry: {
    server: ['babel-polyfill', './style-guide/server'],
  },
  output: {
    path: './lib',
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
