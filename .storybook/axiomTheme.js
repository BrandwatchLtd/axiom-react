import { create } from "@storybook/theming/create";
import logo from "./static_assets/axiom-text.svg";

const borderColor = "rgba(63,63,63, 0.2)"; // --color-theme-day-border: rgba(var(--rgb-theme-day-main), var(--opacity-border));
const active = "#239EDB"; // --color-ui-accent--active;
const white = "#FFFFFF"; // --rgb-ui-white:
const whiteNoiseDefault = "#F8F8F8"; // --rgb-ui-white-noise
const carbonDefault = "#3F3F3F"; // --rgb-ui-carbon
const componentBorderRadius = "0.1875rem"; // --component-border-radius;

export default create({
  base: "light", // base to extend I guess this is SB's light theme

  brandTitle: "Axiom",
  brandImage: logo,
  //colorPrimary: "palegoldenrod", // Not sure where this is used
  colorSecondary: active, // active used in side bar for active story

  //UI
  appBg: whiteNoiseDefault,
  appContentBg: white,
  appBorderColor: borderColor,
  appBorderRadius: componentBorderRadius,

  // Typography
  fontBase: '"Roboto", Helvetica',
  fontCode: "Monaco", // font used for code samples

  // Text colors
  textColor: carbonDefault,
  //textInverseColor: "pink", // Used in Action Logger and notifications

  // Toolbar default and active colors
  barTextColor: carbonDefault,
  barSelectedColor: active, //active
  barBg: white,

  // Form colors
  inputBg: white,
  inputBorder: borderColor,
  inputTextColor: carbonDefault,
  inputBorderRadius: componentBorderRadius,
});
