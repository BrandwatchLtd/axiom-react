const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const generateComponentProps = require('./scripts/component-docs');

const modulesToTranspile = [
  'get-own-enumerable-property-symbols',
  'stringify-object',
];

module.exports = {
  entry: './style-guide/static.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: new RegExp(`node_modules/(?!(${modulesToTranspile.join('|')}))`),
      use: ['babel-loader'],
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
      paths: [
        '/',
        '/docs/materials/colors',
        '/docs/materials/date-and-time',
        '/docs/materials/numbers',
        '/docs/components/alert',
        '/docs/components/avatar',
        '/docs/components/badge',
        '/docs/components/base',
        '/docs/components/button',
        '/docs/components/card',
        '/docs/components/color-picker',
        '/docs/components/context',
        '/docs/components/data-picker',
        '/docs/components/dialog',
        '/docs/components/dropdown',
        '/docs/components/form',
        '/docs/components/grid',
        '/docs/components/icon',
        '/docs/components/image',
        '/docs/components/label',
        '/docs/components/list',
        '/docs/components/logo',
        '/docs/components/menu',
        '/docs/components/pagination',
        '/docs/components/panel',
        '/docs/components/pictogram',
        '/docs/components/position',
        '/docs/components/progress',
        '/docs/components/reveal',
        '/docs/components/statcard',
        '/docs/components/table',
        '/docs/components/tabset',
        '/docs/components/toggle',
        '/docs/components/toolbar',
        '/docs/components/tooltip',
        '/docs/components/typography',
        '/docs/composites/login',
        '/docs/composites/usermenu',
        '/docs/charts/bars',
        '/docs/charts/bar-chart',
        '/docs/charts/bullet-chart',
        '/docs/charts/chart',
        '/docs/charts/chart-heading',
        '/docs/charts/column-chart',
        '/docs/charts/data-point',
        '/docs/charts/dot-plot',
        '/docs/charts/wordcloud',
      ],
    }),
    new webpack.DefinePlugin({
      __BASENAME__: process.env.BASENAME_ENV || '"/"',
      __COMPONENT_PROPS__: JSON.stringify(generateComponentProps()),
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true,
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
