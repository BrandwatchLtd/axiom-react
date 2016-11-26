const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const structureGenerator = require('./scripts/structure-generator');
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
      test: /\.s?css$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
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
