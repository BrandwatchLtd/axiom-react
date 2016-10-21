const webpack = require('webpack');
const webpackConfig = require('./client.config');
const { js, json, yml, style, fonts } = require('./loader.config.js');
const config = require('../config');

module.exports = Object.assign({}, webpackConfig, {
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}`,
    'webpack/hot/only-dev-server',
    config.entries.styleGuide.client,
  ],
  output: Object.assign({}, webpackConfig.output, {
    filename: config.output.styleGuide.clientDevJSFilename,
    chunkFilename: '[name].[id].js',
    publicPath: `http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}/${config.output.folderName}/`,
    hotUpdateMainFilename: 'update/[hash]/update.json',
    hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
  }),
  plugins: [
    ...config.webpack.aliases,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(Object.assign({}, config.webpack.globals, {
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __INCLUDE_CSS__: true,
    })),
  ],
  module: Object.assign({}, webpackConfig.module, {
    loaders: [js, json, yml, style, fonts],
  }),
});
