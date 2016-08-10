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
};
