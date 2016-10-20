const { spacingSm, spacingBase } = require('../../design-patterns/spacing/_vars');

const scales = {
  scaleMinorSecond: 1.067,
  scaleMajorSecond: 1.125,
  scaleMinorThird: 1.200,
  scaleMajorThird: 1.250,
  scalePerfectForth: 1.333,
  scaleAugmentedForth: 1.414,
  scalePerfectFifth: 1.500,
  scaleGoldenRatio: 1.618,
};

const fontHelvetica = '(Helvetica, Arial, sans-serif)';
const fontRobotoThin = `(Roboto-Thin, ${fontHelvetica})`;
const fontRobotoLight = `(Roboto-Light, ${fontHelvetica})`;
const fontRobotoRegular = `(Roboto-Regular, ${fontHelvetica})`;
const fontRobotoMedium = `(Roboto-Medium, ${fontHelvetica})`;
const fontRobotoBold = `(Roboto-Bold, ${fontHelvetica})`;

const fontFamilyBody = fontHelvetica;
const fontFamilyH1 = fontRobotoThin;
const fontFamilyH2 = fontRobotoThin;
const fontFamilyH3 = fontRobotoLight;
const fontFamilyH4 = fontRobotoLight;
const fontFamilyH5 = fontRobotoMedium;

const fontSizeRatio = scales.scaleAugmentedForth;

const fontSizePx = 14; // PX
const fontSizeEm = 1; // Em

const lineHeightPx = 22;

let fontSizeH5 =  fontSizeEm;
let fontSizeH4 =  fontSizeH5 * fontSizeRatio;
let fontSizeH3 =  fontSizeH4 * fontSizeRatio;
let fontSizeH2 =  fontSizeH3 * fontSizeRatio;
let fontSizeH1 =  fontSizeH2 * fontSizeRatio;

fontSizeH5 = `${fontSizeH5}rem`;
fontSizeH4 = `${fontSizeH4}rem`;
fontSizeH3 = `${fontSizeH3}rem`;
fontSizeH2 = `${fontSizeH2}rem`;
fontSizeH1 = `${fontSizeH1}rem`;

module.exports = {
  fontFamilyBody,
  fontFamilyH1,
  fontFamilyH2,
  fontFamilyH3,
  fontFamilyH4,
  fontFamilyH5,

  fontSizeBase: `${fontSizePx}px`,
  fontSizeEm: `${fontSizeEm}rem`,

  fontSizeH5,
  fontSizeH4,
  fontSizeH3,
  fontSizeH2,
  fontSizeH1,

  fontSizeMd: '12px',
  fontSizeSm: '11px',

  lineHeightPx,
  lineHeight: `${lineHeightPx}px`,
  lineHeightDyn: 1.2,

  fontWeightWeak: 300,
  fontWeightBase: 400,
  fontWeightStrong: 700,

  fontHeadings: {
    h1: { family: fontFamilyH1, size: fontSizeH1, margin: `${spacingBase} 0` },
    h2: { family: fontFamilyH2, size: fontSizeH2, margin: `${spacingSm} 0 ${spacingSm}` },
    h3: { family: fontFamilyH3, size: fontSizeH3, margin: `${spacingSm} 0 ${spacingSm}` },
    h4: { family: fontFamilyH4, size: fontSizeH4, margin: `${spacingSm} 0 ${spacingSm}` },
    h5: { family: fontFamilyH5, size: fontSizeH5, margin: `${spacingSm} 0 ${spacingSm}` },
  },

  fontHeadingFamilies: [
    fontRobotoThin,
    fontRobotoLight,
    fontRobotoRegular,
    fontRobotoMedium,
    fontRobotoBold,
  ],
};
