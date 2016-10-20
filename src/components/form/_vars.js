const { colorWhite, colorGrey, colorPrimary, colorGreen, colorRed } = require('../../design-patterns/colors/_vars');
const { componentPaddingVBase, componentPaddingHBase } = require('../../design-patterns/spacing/_vars');
const { lineHeightPx } = require('../typography/_vars');

const formInputBorderWidth = 1;

module.exports = {
  formInputVPadding: componentPaddingVBase,
  formInputHPadding: componentPaddingHBase,
  formInputBorderWidth: `${formInputBorderWidth}px`,
  formInputBorderRadius: '2px',
  formTextareaHeight: '200px',
  formCheckboxSize: `${lineHeightPx + (formInputBorderWidth * 2)}px`,

  inputBackgroundColor: colorWhite['_'],
  inputBorderColor: colorGrey[300],
  inputPlaceholderColor: colorGrey[400],
  inputFocusColor: colorPrimary['A100'],
  inputDisabledColor: colorGrey[100],
  inputValidColor: colorGreen['A400'],
  inputInvalidColor: colorRed['A400'],
  inputCheckedColor: colorPrimary['A400'],
};
