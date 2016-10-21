const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const config = require('../config');
const { js, json, yml } = require('./loader.config.js');

const paths = [
  '/docs/design-patterns/colors',
  '/docs/axiom/getting-started',
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
