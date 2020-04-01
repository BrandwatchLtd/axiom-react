export const rgb2hex = ({ r, g, b }) =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
