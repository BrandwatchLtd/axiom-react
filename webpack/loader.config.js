const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

const js = {
  test: /\.js$/,
  loaders: [
    'babel',
    `sass-variable-override?location=${config.paths.sassVariables}`,
  ],
  exclude: /node_modules/,
};

const json = {
  test: /\.json$/,
  loader: 'json',
};

const yml = {
  test: /\.yml$/,
  loader: 'json!yaml',
};

const style = {
  test: /\.(scss|css)$/,
  loaders: [
    'style',
    'css',
    'postcss',
    'sass',
  ],
};

const styleExtract = {
  test: /\.(scss|css)$/,
  loader: ExtractTextPlugin.extract(
    'style',
    'css!postcss!sass'
  ),
};

const fonts = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file-loader',
  include: [
    config.nodeModules.fontAwesome,
  ],
};

const markdown = {
  test: /\.md$/,
  exclude: /node_modules/,
  loaders: [
    'babel',
    'markdown-documentation',
  ],
};

module.exports = {
  js,
  json,
  yml,
  style,
  styleExtract,
  fonts,
  markdown,
};
