const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
const config = require('../config');
const { js, json, yml, markdown } = require('./loader.config.js');

module.exports = {
  target: 'node',
  context: __dirname,
  cache: false,
  debug: false,
  devtool: 'source-map',
  entry: [
    config.entries.styleGuide.server,
  ],
  output: {
    path: config.output.path,
    filename: config.output.styleGuide.serverDevJSFilename,
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'webpack/loaders',
      'utils',
    ],
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.DefinePlugin(Object.assign({}, config.webpack.globals, {
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      __INCLUDE_CSS__: false,
      'process.env': {
        NODE_ENV: '"production"',
      },
    })),
  ],
  externals: [webpackNodeExternals()],
  module: {
    loaders: [js, json, yml, markdown],
  },
};
