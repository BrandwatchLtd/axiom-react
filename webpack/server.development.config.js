const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
const webpackConfig = require('./server.config');
const config = require('../config');

module.exports = Object.assign({}, webpackConfig, {
  cache: true,
  debug: true,
  entry: [
    'webpack/hot/poll?1000',
    ...webpackConfig.entry,
  ],
  externals: [webpackNodeExternals({
    whitelist: ['webpack/hot/poll?1000'],
  })],
  plugins: [
    ...config.webpack.aliases,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(Object.assign({}, config.webpack.globals, {
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __INCLUDE_CSS__: false,
    })),
  ],
});
