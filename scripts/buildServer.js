/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../webpack/server.config');
const isCalledDirectly = require('./isCalledDirectly');

function buildServer() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    console.log('Ax:: Build Server [1/2]');

    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      }

      console.log(stats.toString({
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
      }));

      console.log('Ax:: Build Server [2/2]');

      resolve();
    });
  });
}

if (isCalledDirectly(__dirname, 'buildServer')) {
  buildServer();
}

module.exports = buildServer;
