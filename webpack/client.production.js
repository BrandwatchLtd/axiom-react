import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';
import loader from './loader.config';
import sharedConfig from './client.shared';

export default {
  entry: sharedConfig.entry,
  output: sharedConfig.output,
  externals: sharedConfig.externals,
  postcss: sharedConfig.postcss,
  sassLoader: sharedConfig.sassLoader,
  module: {
    loaders: [loader.js, loader.style, loader.styleExtract],
  },
  plugins: [new ExtractTextPlugin(config.output.css, {
    allChunks: true,
  }), new webpack.DefinePlugin({
    __INCLUDE_CSS__: true,
  })],
};
