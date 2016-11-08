const spacing = require('../../design-patterns/spacing/_vars');
const { fontSizeMd, fontSizeBase } = require('../typography/_vars');

module.exports = {
  buttonSizes: [{
    id: 'small',
    fontSize: fontSizeMd,
    paddingV: spacing.componentPaddingSm,
    paddingH: spacing.componentPaddingSm,
    default: true,
  }, {
    id: 'large',
    fontSize: fontSizeBase,
    paddingV: spacing.componentPaddingLg,
    paddingH: spacing.componentPaddingLg,
  }],
};
