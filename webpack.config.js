const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './site/index.js',
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /packages/,
        /site/,
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
      template: './site/index.ejs',
      basename: '/',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  resolveLoader: {
    modules: [
      'node_modules',
      'packages',
    ],
  },
  devServer: {
    contentBase: './site',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 4000,
  },
};
