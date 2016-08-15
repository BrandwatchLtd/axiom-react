var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  style: {
    test: /\.(scss|css)$/,
    loaders: [
      'style',
      'css',
      'postcss',
      'sass',
    ],
  },
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      plugins: ['transform-object-rest-spread', 'transform-class-properties'],
      presets: ['es2015', 'react'],
    },
  },
  styleExtract: {
    test: /\.(scss|css)$/,
    loader: ExtractTextPlugin.extract(
      'style',
      `css!postcss!sass`
    ),
  },
};
