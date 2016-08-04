import vars from '../../core/vars';

module.exports = {
  gridChangePoint: vars.layoutWidthSm,
  gridGutters: [
    { id: 'xs', size: vars.spacingXs },
    { id: 'sm', size: vars.spacingSm },
    { id: 'base', size: vars.spacingBase, default: true },
    { id: 'lg', size: vars.spacingLg },
    { id: 'xl', size: vars.spacingXl },
    { id: 'xxl', size: vars.spacingXxl },
  ],
  gridWidths: [
    { id: 'half', percent: `${100 / 2}%` },
    { id: 'third', percent: `${100 / 3}%` },
    { id: 'quarter', percent: `${100 / 4}%` },
    { id: 'fifth', percent: `${100 / 5}%` },
    { id: 'sixth', percent: `${100 / 6}%` },
  ],
};
