module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: require('./browsers'),
      features: {
        customProperties: false,
      },
    }),
  ],
};
