import vars from '../../core/vars';

const fontHelvetica = `(Helvetica, Arial, sans-serif)`;
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

const fontSizeRatio = vars.scaleAugmentedForth;

const fontSizePx = 14; // PX
const fontSizeEm = 1; // Em

const fontSizeH5 =  fontSizeEm;
const fontSizeH4 =  fontSizeH5 * fontSizeRatio;
const fontSizeH3 =  fontSizeH4 * fontSizeRatio;
const fontSizeH2 =  fontSizeH3 * fontSizeRatio;
const fontSizeH1 =  fontSizeH2 * fontSizeRatio;

module.exports = {
  fontFamilyBody,
  fontFamilyH1,
  fontFamilyH2,
  fontFamilyH3,
  fontFamilyH4,
  fontFamilyH5,

  fontSizeBase: `${fontSizePx}px`,
  fontSizeEm: `${fontSizeEm}rem`,

  fontSizeH5: `${fontSizeH5}rem`,
  fontSizeH4: `${fontSizeH4}rem`,
  fontSizeH3: `${fontSizeH3}rem`,
  fontSizeH2: `${fontSizeH2}rem`,
  fontSizeH1: `${fontSizeH1}rem`,

  fontSizeMd: '12px',
  fontSizeSm: '11px',

  lineHeight: '22px',
  lineHeightDyn: 1.2,

  fontWeightWeak: 300,
  fontWeightBase: 400,
  fontWeightStrong: 700,

  fontHeadings: {
    h1: { family: fontFamilyH1, size: `${fontSizeH1}rem` },
    h2: { family: fontFamilyH2, size: `${fontSizeH2}rem` },
    h3: { family: fontFamilyH3, size: `${fontSizeH3}rem` },
    h4: { family: fontFamilyH4, size: `${fontSizeH4}rem` },
    h5: { family: fontFamilyH5, size: `${fontSizeH5}rem` },
  },

  fontHeadingFamilies: [
    fontRobotoThin,
    fontRobotoLight,
    fontRobotoRegular,
    fontRobotoMedium,
    fontRobotoBold,
  ],
}
