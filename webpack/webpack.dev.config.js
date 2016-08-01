'use strict';

module.exports = {
  entry: {
    app: ['babel-polyfill', './docs/client'],
  },
  output: {
    path: './lib',
    filename: 'axiom.js',
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        plugins: ['transform-object-rest-spread', 'transform-class-properties'],
        presets: ['es2015', 'react'],
      },
    }],
  },
};
