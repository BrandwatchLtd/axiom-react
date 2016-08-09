import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import * as config from '../config';
import axiomSassVariableImporter from '../utils/axiom-sass-variable-importer';
import { js, json, yml, styleExtract, fonts, markdown } from './loader.config.js';

export default {
  target: 'web',
  context: __dirname,
  cache: false,
  debug: false,
  devtool: false,
  entry: config.entries.styleGuide.client,
  output: {
    path: config.output.path,
    filename: config.output.styleGuide.clientProdJSFilename,
  },
  resolve: {
    alias: {
      'bw-axiom': config.paths.source,
      'style-guide': config.paths.styleGuide,
    },
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'webpack/loaders',
      'utils',
    ],
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // TODO: Can't enable this until UglifyJS2 Harmony is released
    // https://github.com/mishoo/UglifyJS2/issues/448
    // new webpack.optimize.UglifyJsPlugin({
      // compress: {
        // keep_fnames: true,
        // keep_classnames: true,
        // warnings: false,
      // },
    // }),
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      __INCLUDE_CSS__: true,
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new ExtractTextPlugin(config.output.styleGuide.clientProdCSSFilename, {
      allChunks: true,
    }),
  ],
  module:  {
    loaders: [js, json, yml, styleExtract, fonts, markdown],
  },
  sassLoader: {
    importer: [
      axiomSassVariableImporter(config.webpack.aliases),
    ],
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
};
