const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const packageJSON = require('./package.json');
const version = packageJSON.version;

module.exports = {
  entry: ['./src/index.js'],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass'),
    }],
  },
  output: {
    filename: './dist/axiom.min.js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('./dist/axiom.min.css', { allChunks: true }),
    new ExtractTextPlugin(`./dist/axiom.${version}.min.css`, { allChunks: true }),
    new webpack.DefinePlugin({
      __INCLUDE_CSS__: true,
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        keep_fnames: true,
      },
    }),
    new CompressionPlugin({
      asset: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': path.resolve(__dirname, 'src'),
    },
  },
  postcss: () => [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
};
