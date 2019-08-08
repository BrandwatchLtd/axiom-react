const palette = require('../../../packages/axiom-materials/src/colors');

module.exports = {
  base: [
    palette.uiCarbonDarker,
    palette.uiWhiteNoise,
  ],
  brand: [].concat(
    Object.values(palette.productColors),
    Object.values(palette.productActiveColors),
    Object.values(palette.productHoverColors),
    // Red
    palette.sentimentNegativeActive,
    // Navy
    palette.socialTumblrHover
  ),
};
