module.exports = {
  plugins: [
    require('postcss-cssnext')({
      browsers: [
        ...require('@brandwatch/axiom-materials/browsers'),
        'IE 11',
      ],
      features: {
        autoprefixer: {
          grid: true,
        },
        customProperties: false,
      },
    }),
  ],
};
