import { layoutWidthSm } from '../../design-patterns/layout/_vars';
import { spacingXs, spacingSm, spacingBase, spacingLg, spacingXl, spacingXxl } from '../../design-patterns/spacing/_vars';

module.exports = {
  gridChangePoint: layoutWidthSm,
  gridGutters: [
    { id: 'xsmall', size: spacingXs },
    { id: 'small', size: spacingSm },
    { id: 'medium', size: spacingBase, default: true },
    { id: 'large', size: spacingLg },
    { id: 'xlarge', size: spacingXl },
    { id: 'xxlarge', size: spacingXxl },
  ],
  gridWidths: [
    { id: 'half', percent: `${100 / 2}%` },
    { id: 'third', percent: `${100 / 3}%` },
    { id: 'quarter', percent: `${100 / 4}%` },
    { id: 'fifth', percent: `${100 / 5}%` },
    { id: 'sixth', percent: `${100 / 6}%` },
  ],
};
