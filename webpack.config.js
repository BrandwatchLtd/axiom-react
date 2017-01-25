const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const structureGenerator = require('./scripts/structure-generator');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './style-guide/client.js',
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
      test: /\.s?css$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    }],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './style-guide/index.ejs',
      basename: '/',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __INCLUDE_CSS__: true,
      __STRUCTURE__: JSON.stringify(structureGenerator()),
      __BASENAME__: '"/"',
      __DEVELOPMENT__: true,
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': path.resolve(__dirname, 'src'),
      'style-guide': path.resolve(__dirname, 'style-guide/components'),
    },
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
};
