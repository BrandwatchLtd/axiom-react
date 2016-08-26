/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack/client.production';

export default function buildClient() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    console.log('Ax:: Build Client [1/2]');

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

      console.log('Ax:: Build Client [2/2]');

      resolve();
    });
  });
}
