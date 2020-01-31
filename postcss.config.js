module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      browsers: [...require('@brandwatch/axiom-materials/browsers', 'IE 11')],
      importFrom: [
        './packages/axiom-materials/src/animations.css',
        './packages/axiom-materials/src/layout.css',
        './packages/axiom-materials/src/colors.css',
        './packages/axiom-materials/src/opacities.css',
        './packages/axiom-materials/src/sizing.css',
        './packages/axiom-materials/src/typography.css',
        './packages/axiom-materials/src/theme-day.css',
        './packages/axiom-materials/src/theme-night.css',
      ],
      features: {
        autoprefixer: {
          grid: true,
        },
      },
    }),
  ],
};
