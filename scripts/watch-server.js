/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../webpack/server.development.config');

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

module.exports = function watchServer() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    console.log('Ax:: Watch Server [1/2]');

    compiler.watch({}, (error, stats) => {
      if (error) {
        reject(error);
      }

      console.log(stats.toString(statOptions));
      console.log('Ax:: Watch Server [2/2]');

      resolve();
    });
  });
};
