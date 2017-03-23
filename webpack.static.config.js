const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const structureGenerator = require('./scripts/structure-generator');

const modulesToTranspile = [
  'get-own-enumerable-property-symbols',
  'stringify-object',
];

module.exports = {
  entry: './style-guide/static.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: new RegExp(`node_modules/(?!(${modulesToTranspile.join('|')}))`),
      use: ['babel-loader'],
    }, {
      test: /\.ejs$/,
      use: ['ejs-loader'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        }, {
          loader: 'postcss-loader',
        }],
      }),
    }],
  },
  output: {
    filename: './assets/bundle.[hash].min.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin({
      filename: './assets/bundle.[hash].min.css',
    }),
    new CopyWebpackPlugin([{
      from: './style-guide/assets',
      to: './assets',
    }]),
    new StaticSiteGeneratorPlugin({
      paths: structureGenerator.extractPaths(),
    }),
    new webpack.DefinePlugin({
      __STRUCTURE__: JSON.stringify(structureGenerator()),
      __BASENAME__: process.env.BASENAME_ENV || '"/"',
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
};
