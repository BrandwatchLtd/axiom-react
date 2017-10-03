const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const generateComponentProps = require('./scripts/component-docs');
const { getRoutes } = require('./style-guide/utils/documentation-routes');
const baseName = process.env.BASENAME_ENV || '';

module.exports = {
  entry: './style-guide/static.js',
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
      test: /\.ejs$/,
      use: ['ejs-loader'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        }, {
          loader: 'postcss-loader',
        }],
      }),
    }],
  },
  output: {
    filename: './assets/bundle.[hash].min.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin({
      filename: './assets/bundle.[hash].min.css',
    }),
    new CopyWebpackPlugin([{
      from: './style-guide/assets',
      to: './assets',
    }]),
    new StaticSiteGeneratorPlugin({
      paths: ['/'].concat(getRoutes(baseName).map(({ path }) => path)),
    }),
    new webpack.EnvironmentPlugin({
      BASENAME: baseName,
      COMPONENT_PROPS: JSON.stringify(generateComponentProps()),
      NODE_ENV: 'production',
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6,
        mangle: {
          keep_fnames: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      'bw-axiom': path.resolve(__dirname, 'src'),
      'style-guide': path.resolve(__dirname, 'style-guide/components'),
    },
  },
};
