import { colorWhite, colorGrey, colorAccent, colorGreen, colorRed } from '../../design-patterns/colors/_vars';
import { componentPaddingVBase, componentPaddingHSm } from '../../design-patterns/spacing/_vars';
import { lineHeightPx } from '../typography/_vars';

const formInputBorderWidth = 1;

module.exports = {
  formInputVPadding: componentPaddingVBase,
  formInputHPadding: componentPaddingHSm,
  formInputBorderWidth: `${formInputBorderWidth}px`,
  formInputBorderRadius: '2px',
  formTextareaHeight: '200px',
  formCheckboxSize: `${lineHeightPx + (formInputBorderWidth * 2)}px`,

  inputBackgroundColor: colorWhite['_'],
  inputBorderColor: colorGrey[300],
  inputPlaceholderColor: colorGrey[400],
  inputFocusColor: colorAccent['A100'],
  inputDisabledColor: colorGrey[100],
  inputValidColor: colorGreen['A400'],
  inputInvalidColor: colorRed['A400'],
  inputCheckedColor: colorAccent['A400'],
};
