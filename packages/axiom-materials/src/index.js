export { default as animations } from './animations';
export { default as colors } from './colors';
export { default as layout } from './layout';
export { default as opacities } from './opacities';

export const importCssVariables = () => {
  require('./animations.css');
  require('./colors.css');
  require('./layout.css');
  require('./opacities.css');
  require('./sizing.css');
  require('./theme-day.css');
  require('./theme-night.css');
  require('./typography.css');
};
