import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';
import webpackConfig from './server.config';
import * as config from '../config';

export default {
  ...webpackConfig,
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
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __INCLUDE_CSS__: false,
    }),
  ],
};
