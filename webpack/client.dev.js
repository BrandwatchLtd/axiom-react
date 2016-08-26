import webpack from 'webpack';
import loader from './loader.config';
import sharedConfig from './client.shared';

export default {
  entry: sharedConfig.entry,
  output: sharedConfig.output,
  externals: sharedConfig.externals,
  postcss: sharedConfig.postcss,
  sassLoader: sharedConfig.sassLoader,
  module: {
    loaders: [loader.js, loader.style],
  },
  plugins: [new webpack.DefinePlugin({
    __INCLUDE_CSS__: true,
  })],
  devtool: 'source-map',
  watch: true,
};
