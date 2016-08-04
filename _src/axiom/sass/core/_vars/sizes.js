const spacingXs = '3px';
const spacingSm = '7px';
const spacingBase = '15px';
const spacingLg = '30px';
const spacingXl = '45px';
const spacingXxl = '60px';

const layoutWidthSm = '768px';
const layoutWidthMd = '992px';
const layoutWidthLg = '1200px';

const borderWidthSm = '1px';
const borderWidthBase = '2px';
const borderWidthLg = '3px';

const borderRadiusSm = '2px;'
const borderRadiusBase = '3px';
const borderRadiusLg = '5px';
const borderRadiusXl = '10px';

const breakpoints = [
  { id: 'sm', width: layoutWidthSm },
  { id: 'md', width: layoutWidthMd },
  { id: 'lg', width: layoutWidthLg },
];

module.exports = {
  spacingXs,
  spacingSm,
  spacingBase,
  spacingLg,
  spacingXl,
  spacingXxl,

  layoutWidthSm,
  layoutWidthMd,
  layoutWidthLg,
  layoutChangePoint: layoutWidthSm,

  breakpoints,
  breakpointIds: breakpoints.map(({ id }) => id),

  borderWidthSm,
  borderWidthBase,
  borderWidthLg,

  borderRadiusSm,
  borderRadiusBase,
  borderRadiusLg,
  borderRadiusXl,

  pagePaddingV: spacingLg,
  pagePaddingH: spacingLg,

  containerPaddingVSm: spacingBase,
  containerPaddingVBase: spacingLg,
  containerPaddingVLg: spacingXl,

  containerPaddingHSm: spacingBase,
  containerPaddingHBase: spacingLg,
  containerPaddingHLg: spacingXl,

  containerMarginVSm: spacingBase,
  containerMarginVBase: spacingLg,
  containerMarginVLg: spacingXl,

  containerMarginHSm: spacingBase,
  containerMarginHBase: spacingLg,
  containerMarginHLg: spacingXl,

  componentPaddingVSm: spacingXs,
  componentPaddingVBase: spacingSm,
  componentPaddingVLg: spacingBase,

  componentPaddingHSm: spacingSm,
  componentPaddingHBase: spacingBase,
  componentPaddingHLg: spacingLg,

  componentMarginVSm: spacingSm,
  componentMarginVBase: spacingBase,
  componentMarginVLg: spacingLg,

  componentMarginHSm: spacingSm,
  componentMarginHBase: spacingBase,
  componentMarginHLg: spacingLg,

  componentBorderWidthBase: borderWidthSm,
  componentBorderWidthLg: borderWidthBase,
};
