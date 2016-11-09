const { componentPaddingLg } = require('../../design-patterns/spacing/_vars');

const fontHelvetica = '(Helvetica, Arial, sans-serif)';
const fontFamilyThin = `(Roboto-Thin, ${fontHelvetica})`;
const fontFamilyLight = `(Roboto-Light, ${fontHelvetica})`;
const fontFamilyRegular = `(Roboto-Regular, ${fontHelvetica})`;
const fontFamilyMedium = `(Roboto-Medium, ${fontHelvetica})`;
const fontFamilyBold = `(Roboto-Bold, ${fontHelvetica})`;

const fontSizePx = 14; // PX
const fontSizeEm = 1; // Em

const lineHeightPx = 22;

module.exports = {
  fontFamilyBody: fontFamilyRegular,

  fontSizeBase: `${fontSizePx}px`,
  fontSizeEm: `${fontSizeEm}rem`,

  fontSizeMd: '12px',
  fontSizeSm: '11px',

  lineHeightPx,
  lineHeight: `${lineHeightPx}px`,
  lineHeightDyn: 1.2,

  fontFamilyThin,
  fontFamilyLight,
  fontFamilyRegular,
  fontFamilyMedium,
  fontFamilyBold,

  fontHeadings: [{
    id: 'display',
    size: '40px',
    margin: `${componentPaddingLg} 0`,
    tag: 'h1',
  }, {
    id: 'headline',
    size: '22px',
    margin: `${componentPaddingLg} 0 ${componentPaddingLg}`,
    tag: 'h2',
  }, {
    id: 'title',
    size: '18px',
    margin: `${componentPaddingLg} 0 ${componentPaddingLg}`,
    tag: 'h3',
  }, {
    id: 'large',
    size: '16px',
    margin: `${componentPaddingLg} 0 ${componentPaddingLg}`,
    tag: 'h4',
    default: true,
  }],
};
