const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const config = require('../config');
const { js, json, yml } = require('./loader.config.js');

// ToDo this should be read from `DocStructure` but apparently this requires the
// files to be compiled with babel.
const paths = [
  '/',
  '/design-patterns/colors',
  '/design-patterns/date-and-time',
  '/design-patterns/numbers',
  '/components/avatar',
  '/components/billboard',
  '/components/button',
  '/components/dialog',
  '/components/form',
  '/components/grid',
  '/components/icon',
  '/components/icons',
  '/components/image',
  '/components/label',
  '/components/logo',
  '/components/select',
  '/components/table',
  '/components/tabset',
  '/components/typography',
];

module.exports = {
  entry: [config.entries.styleGuide.static],
  output: {
    filename: 'static.js',
    path: 'docs',
    libraryTarget: 'umd',
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.DefinePlugin(Object.assign({}, config.webpack.globals, {
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      __INCLUDE_CSS__: false,
      'process.env': {
        NODE_ENV: '"production"',
      },
    })),
    new StaticSiteGeneratorPlugin('main', paths),
  ],
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'webpack/loaders',
      'utils',
    ],
  },
  module: {
    loaders: [js, json, yml],
  },
};
