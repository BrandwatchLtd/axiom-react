import * as spacing from '../../design-patterns/spacing/_vars';
import { fontSizeSm, fontSizeMd, fontSizeBase } from '../typography/_vars';

module.exports = {
  labelSizes: [{
    id: 'small',
    paddingV: 0,
    paddingH: spacing.componentPaddingHSm,
    fontSize: fontSizeSm,
  }, {
    id: 'medium',
    paddingV: spacing.componentPaddingVSm,
    paddingH: spacing.componentPaddingHSm,
    fontSize: fontSizeMd,
    default: true,
  }, {
    id: 'large',
    paddingV: spacing.componentPaddingVBase,
    paddingH: spacing.componentPaddingHBase,
    fontSize: fontSizeBase,
  }],
};
