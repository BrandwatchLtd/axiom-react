/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack/client.dev';

export default function watchClient() {
  return new Promise((resolve) => {
    console.log('Ax:: Watch Client [1/2]');

    const compiler = webpack(webpackConfig, () => {
      console.log('Ax:: Watch Client [2/2]');
      resolve();
    });
  });
}
