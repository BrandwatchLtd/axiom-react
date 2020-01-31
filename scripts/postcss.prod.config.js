module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      browsers: [...require('@brandwatch/axiom-materials/browsers')],
      features: {
        customProperties: false,
      },
    }),
  ],
};
