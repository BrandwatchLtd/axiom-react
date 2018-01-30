const cssCustomProperties = require('@brandwatch/axiom-materials/css-custom-properties');

module.exports = {
  plugins: [
    require('postcss-cssnext')({
      browsers: [
        ...require('@brandwatch/axiom-materials/browsers'),
        'IE 11',
      ],
      features: {
        customProperties: {
          preserve: true,
          warnings: false,
          variables: cssCustomProperties({ theme: 'day' }),
        },
      },
    }),
  ],
};
