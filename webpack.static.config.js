const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const structureGenerator = require('./scripts/structure-generator');

module.exports = {
  entry: {
    main: './style-guide/static.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }, {
      test: /\.json$/,
      loaders: ['json'],
    }, {
      test: /\.ejs$/,
      loaders: ['ejs'],
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass'),
    }],
  },
  output: {
    filename: './assets/bundle.[hash].min.js',
    path: './static/',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin('./assets/bundle.[hash].min.css', { allChunks: true }),
    new CopyWebpackPlugin([{ from: './style-guide/assets', to: './assets' }]),
    new StaticSiteGeneratorPlugin('main', structureGenerator.extractPaths()),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        keep_fnames: true,
      },
    }),
    new webpack.DefinePlugin({
      __INCLUDE_CSS__: true,
      __STRUCTURE__: JSON.stringify(structureGenerator()),
      __BASENAME__: process.env.BASENAME_ENV || '"/"',
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': path.resolve(__dirname, 'src'),
      'style-guide': path.resolve(__dirname, 'style-guide/components'),
    },
  },
  postcss: () => [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
};
