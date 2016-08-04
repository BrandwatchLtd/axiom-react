'use strict';

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/client'],
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'webpack/loaders',
    ],
  },
  output: {
    path: './lib',
    filename: 'axiom.js',
    resolve: {
      extensions: ['', '.js'],
    },
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.md/,
      loaders: ['babel', 'markdown-jsx'],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-object-rest-spread', 'transform-class-properties'],
        presets: ['es2015', 'react'],
      },
    }],
  },
  remarkable: {
    preset: 'full',
    linkify: true,
    typographer: true,
  },
};
