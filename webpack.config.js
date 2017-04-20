const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const generateComponentProps = require('./scripts/component-docs');

const modulesToTranspile = [
  'get-own-enumerable-property-symbols',
  'stringify-object',
];

module.exports = {
  devtool: 'source-map',
  entry: './style-guide/client.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: new RegExp(`node_modules/(?!(${modulesToTranspile.join('|')}))`),
      use: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './style-guide/index.ejs',
      basename: '/',
    }),
    new webpack.DefinePlugin({
      __BASENAME__: '"/"',
      __COMPONENT_PROPS__: JSON.stringify(generateComponentProps()),
      __DEVELOPMENT__: true,
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': path.resolve(__dirname, 'src'),
      'style-guide': path.resolve(__dirname, 'style-guide/components'),
    },
  },
};
