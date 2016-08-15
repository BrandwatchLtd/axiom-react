const Alias = require('./utils/webpack-alias-plugin');
var path = require('path');

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
  aliases: [
    new Alias(/^bw-axiom/, (resolve) => resolve.replace(/^bw-axiom(.*)/, path.resolve(__dirname, '../', 'docs') + '$1')),
  ],
};
