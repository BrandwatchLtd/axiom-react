/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../webpack/static.config');

function buildStatic() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    console.log('Ax:: Build Static [1/2]');

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

      console.log('Ax:: Build Static [2/2]');

      resolve();
    });
  });
}

module.exports = buildStatic;
