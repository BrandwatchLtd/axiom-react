const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const generate = require('./scripts/component-docs');
const Alias = require('./utils/webpack-alias-plugin');
const axiomSassVariableImporter = require('./utils/axiom-sass-variable-importer');

const src = path.resolve(__dirname, 'src');
const styleGuide = path.resolve(__dirname, 'style-guide');

const aliases = [
  new Alias(/^bw-axiom/, (path) => path.replace(/^bw-axiom(.*)/, `${src}$1`)),
  new Alias(/^style-guide/, (path) => path.replace(/^style-guide(.*)/, `${styleGuide}$1`)),
];

module.exports = {
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
      test: /\.yml$/,
      loaders: ['json', 'yaml'],
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loaders: ['file-loader'],
      include: /node_modules\/font-awesome/,
    }],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    ...aliases,
    new HtmlWebpackPlugin({
      template: './style-guide/index.ejs',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __INCLUDE_CSS__: true,
      __COMPONENT_DOCS__: JSON.stringify(generate()),
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': src,
      'style-guide': styleGuide,
    },
  },
  sassLoader: {
    importer: [
      axiomSassVariableImporter(aliases),
    ],
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
};
