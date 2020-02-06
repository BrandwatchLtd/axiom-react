import { colors } from '@brandwatch/axiom-materials';

const productColors = Object.keys(colors.userDefinedGraphColors);

export default (string, colors = productColors) =>
  colors[
    string
      .split('')
      .reduce((acc, val) =>
        acc + val.charCodeAt(), 0) % (colors.length - 1)
  ];
