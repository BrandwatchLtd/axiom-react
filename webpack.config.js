const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const generateComponentProps = require('./scripts/component-docs');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './style-guide/client.js',
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /src/,
        /style-guide/,
        /node_modules\/get-own-enumerable-property-symbols/,
        /node_modules\/stringify-object/,
      ],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './style-guide/index.ejs',
      basename: '/',
    }),
    new webpack.EnvironmentPlugin({
      BASENAME: '/',
      COMPONENT_PROPS: JSON.stringify(generateComponentProps()),
      NODE_ENV: 'development',
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': path.resolve(__dirname, 'src'),
      'style-guide': path.resolve(__dirname, 'style-guide/components'),
    },
  },
  devServer: {
    contentBase: './style-guide',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 4000,
  },
};
