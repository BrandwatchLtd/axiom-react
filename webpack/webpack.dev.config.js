'use strict';

module.exports = {
  entry: {
    axiom: ['babel-polyfill', './src/client'],
    index: ['babel-polyfill', './docs'],
  },
  output: {
    path: './lib',
    filename: '[name].js',
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-object-rest-spread', 'transform-class-properties'],
        presets: ['es2015', 'react'],
      },
    }],
  },
};
