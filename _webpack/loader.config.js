import ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as config from '../config';

export const js = {
  test: /\.js$/,
  loaders: [
    'babel',
    `sass-variable-override?location=${config.paths.sassVariables}`,
  ],
  exclude: /node_modules/,
};

export const json = {
  test: /\.json$/,
  loader: 'json',
};

export const yml = {
  test: /\.yml$/,
  loader: 'json!yaml',
};

export const style = {
  test: /\.(scss|css)$/,
  loaders: [
    'style',
    'css',
    'postcss',
    'sass',
  ],
}

export const styleExtract = {
  test: /\.(scss|css)$/,
  loader: ExtractTextPlugin.extract(
    'style',
    `css!postcss!sass`,
  ),
};

export const fonts = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file-loader',
  include: [
    config.nodeModules.fontAwesome,
  ],
};

export const markdown = {
  test: /\.md$/,
  exclude: /node_modules/,
  loaders: [
    'babel',
    'markdown-documentation',
  ],
};
