/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../webpack/client.development.config');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config');

// Config for minimal console.log mess.
const statOptions = {
  assets: false,
  colors: true,
  version: false,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
};

module.exports = function watchClient() {
  return new Promise((resolve) => {
    const compiler = webpack(webpackConfig);

    console.log('Ax:: Watch Client [1/2]');

    const webpackDevServer = new WebpackDevServer(compiler, {
      host: config.webpack.devServerHostname,
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      inline: false,
      lazy: false,
      quiet: false,
      noInfo: false,
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: statOptions,
    });

    webpackDevServer.listen(config.webpack.devServerPort, () => {
      console.log('Ax:: Watch Client [2/2]');
      resolve();
    });
  });
};
