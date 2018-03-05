const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './site/static.js',
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /packages/,
        /site/,
        /style-guide/,
        /node_modules\/get-own-enumerable-property-symbols/,
        /node_modules\/stringify-object/,
      ],
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
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new ExtractTextPlugin({
      filename: './assets/bundle.[hash].min.css',
    }),
    new CopyWebpackPlugin([{
      from: './site/assets',
      to: './assets',
    }]),
    new StaticSiteGeneratorPlugin({
      crawl: true,
      paths: ['/', '/docs/packages'],
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6,
        mangle: {
          keep_classnames: true,
          keep_fnames: true,
        },
      },
    }),
    new CompressionPlugin({
      asset: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
    }),
  ],
  resolveLoader: {
    modules: [
      'node_modules',
      'packages',
    ],
  },
};
