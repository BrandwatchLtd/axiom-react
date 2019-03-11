const palette = require('../../../packages/axiom-materials/src/colors');

module.exports = {
  base: [
    palette.uiCarbonDarker,
    palette.uiWhiteNoise,
  ],
  brand: Object.values(palette.productColors)
    // Add additional colours to fill the gaps (e.g. red, navy)
    .concat(...[
      palette.sentimentNegativeActive,
      palette.socialFacebookActive,
    ]),
};
