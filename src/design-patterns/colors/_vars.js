/**
 * Palette
 */
const colorWhite0 = '#ffffff';

const colorBlack0 = '#000000';

const colorGrey0 = '#f7f5f9';
const colorGrey1 = '#f2f0f9';
const colorGrey2 = '#edebf4';
const colorGrey3 = '#e8e6ef';
const colorGrey4 = '#e3e1ea';
const colorGrey5 = '#d4d2db';
const colorGrey6 = '#cac8d1';
const colorGrey7 = '#c0bec7';
const colorGrey8 = '#98969f';
const colorGrey9 = '#706e77';
const colorGrey10 = '#5c5a63';
const colorGrey11 = '#48464f';

const colorBlue0 = '#2997cd';
const colorBlue1 = '#1f8dc3';
const colorBlue2 = '#1583b9';

const colorRed0 = '#dc6d6d';
const colorPink0 = '#ff586f';
const colorOrange0 = '#f46b00';
const colorOrangeLight0 = '#ff8f00';
const colorYellow0 = '#f6be00';
const colorGreen0 = '#8ea53c';
const colorBlueLight0 = '#5fc3e6';
const colorPurple0 = '#9c7cb6';

/**
 * Context
 */
const colorPrimary0 = colorBlue0;
const colorPrimary1 = colorBlue1;
const colorPrimary2 = colorBlue2;

/**
 * Text Colors
 */
const textColorLight = colorGrey0;
const textColorSubtle = colorGrey5;
const textColorDark = colorGrey11;

const textColorMap = {
  [textColorLight]: [
    colorBlack0,
    colorGrey8,
    colorGrey9,
    colorGrey10,
    colorGrey11,
    colorRed0,
    colorPink0,
    colorOrange0,
    colorOrangeLight0,
    colorYellow0,
    colorGreen0,
    colorBlue0,
    colorBlue1,
    colorBlue2,
    colorBlueLight0,
    colorPurple0,
  ],
  [textColorDark]: [
    colorWhite0,
    colorGrey0,
    colorGrey1,
    colorGrey2,
    colorGrey3,
    colorGrey4,
    colorGrey5,
    colorGrey6,
    colorGrey7,
  ],
};

module.exports = {
  colorWhite0,
  colorBlack0,
  colorGrey0,
  colorGrey1,
  colorGrey2,
  colorGrey3,
  colorGrey4,
  colorGrey5,
  colorGrey6,
  colorGrey7,
  colorGrey8,
  colorGrey9,
  colorGrey10,
  colorGrey11,

  colorRed0,
  colorPink0,
  colorOrange0,
  colorOrangeLight0,
  colorYellow0,
  colorGreen0,
  colorBlue0,
  colorBlue1,
  colorBlue2,
  colorBlueLight0,
  colorPurple0,

  colorPrimary0,
  colorPrimary1,
  colorPrimary2,

  textColorLight,
  textColorSubtle,
  textColorDark,

  textColorMap,

  dropShadowLight: `0 0 1px 0 rgba(${colorGrey0}, 0.10)`,
  dropShadowBase: `0 0 1px 0 rgba(${colorGrey0}, 0.25)`,
  dropShadowDark: `0 0 1px 0 rgba(${colorGrey0}, 0.40)`,
};
