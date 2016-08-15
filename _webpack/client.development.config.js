import webpack from 'webpack';
import webpackConfig from './client.config';
import { js, json, yml, style, fonts, markdown } from './loader.config.js';
import * as config from '../config';

export default {
  ...webpackConfig,
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}`,
    'webpack/hot/only-dev-server',
    config.entries.styleGuide.client,
  ],
  output: {
    ...webpackConfig.output,
    filename: config.output.styleGuide.clientDevJSFilename,
    chunkFilename: '[name].[id].js',
    publicPath: `http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}/${config.output.folderName}/`,
    hotUpdateMainFilename: 'update/[hash]/update.json',
    hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __INCLUDE_CSS__: true,
    }),
  ],
  module: {
    ...webpackConfig.module,
    loaders: [js, json, yml, style, fonts, markdown],
  },
};
