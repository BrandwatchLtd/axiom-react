const colors = require('../../design-patterns/colors/_vars');
const spacing = require('../../design-patterns/spacing/_vars');
const { fontSizeMd, fontSizeBase } = require('../typography/_vars');

module.exports = {
  labelSizes: [{
    id: 'small',
    fontSize: fontSizeMd,
    paddingV: '0px',
    paddingH: spacing.componentPaddingSm,
    default: true,
  }, {
    id: 'large',
    fontSize: fontSizeBase,
    paddingV: spacing.componentPaddingSm,
    paddingH: spacing.componentPaddingSm,
  }],
  labelColors: [
    { id: 'white', color: colors.colorWhite0 },
    { id: 'grey', color: colors.colorGrey1, default: true },
    { id: 'red', color: colors.colorRed0 },
    { id: 'pink', color: colors.colorPink0 },
    { id: 'orange', color: colors.colorOrange0 },
    { id: 'orange-light', color: colors.colorOrangeLight0 },
    { id: 'yellow', color: colors.colorYellow0 },
    { id: 'green', color: colors.colorGreen0 },
    { id: 'blue', color: colors.colorBlue1 },
    { id: 'blue-light', color: colors.colorBlueLight0 },
    { id: 'purple', color: colors.colorPurple0 },
  ],
};
