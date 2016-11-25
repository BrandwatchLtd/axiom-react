const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const generate = require('./scripts/component-docs');
const Alias = require('./utils/webpack-alias-plugin');
const axiomSassVariableImporter = require('./utils/axiom-sass-variable-importer');

const src = path.resolve(__dirname, 'src');
const styleGuide = path.resolve(__dirname, 'style-guide');

const aliases = [
  new Alias(/^bw-axiom/, (path) => path.replace(/^bw-axiom(.*)/, `${src}$1`)),
  new Alias(/^style-guide/, (path) => path.replace(/^style-guide(.*)/, `${styleGuide}$1`)),
];

// ToDo this should be read from `DocStructure` but apparently this requires the
// files to be compiled with babel.
const paths = [
  '/',
  '/design-patterns/colors',
  '/design-patterns/date-and-time',
  '/design-patterns/numbers',
  '/components/avatar',
  '/components/base',
  '/components/button',
  '/components/dialog',
  '/components/form',
  '/components/grid',
  '/components/icons',
  '/components/image',
  '/components/label',
  '/components/logo',
  '/components/menu',
  '/components/select',
  '/components/tabset',
  '/components/typography',
];

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
      test: /\.yml$/,
      loaders: ['json', 'yaml'],
    }, {
      test: /\.ejs$/,
      loaders: ['ejs'],
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=./assets/[name].[ext]',
      include: /node_modules\/font-awesome/,
    }],
  },
  output: {
    filename: './assets/bundle.js',
    path: './static/',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    ...aliases,
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin('./assets/bundle.css', { allChunks: true }),
    new CopyWebpackPlugin([{ from: './style-guide/assets', to: './assets' }]),
    new StaticSiteGeneratorPlugin('main', paths),
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
