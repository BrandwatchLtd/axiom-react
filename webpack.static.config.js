const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const Alias = require('./utils/webpack-alias-plugin');
const axiomSassVariableImporter = require('./utils/axiom-sass-variable-importer');
const structureGenerator = require('./scripts/structure-generator');

const src = path.resolve(__dirname, 'src');
const styleGuide = path.resolve(__dirname, 'style-guide');

const aliases = [
  new Alias(/^bw-axiom/, (path) => path.replace(/^bw-axiom(.*)/, `${src}$1`)),
  new Alias(/^style-guide/, (path) => path.replace(/^style-guide(.*)/, `${styleGuide}$1`)),
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
      test: /\.ejs$/,
      loaders: ['ejs'],
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
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
    new StaticSiteGeneratorPlugin('main', structureGenerator.extractPaths()),
    new webpack.DefinePlugin({
      __INCLUDE_CSS__: true,
      __STRUCTURE__: JSON.stringify(structureGenerator()),
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
