import palette from './_palette';
import aliases from './_aliases';

const colorPalette = [[
  { name: 'red', color: palette.colorRed },
  { name: 'pink', color: palette.colorPink },
  { name: 'purple', color: palette.colorPurple },
], [
  { name: 'deep-purple', color: palette.colorDeepPurple },
  { name: 'indigo', color: palette.colorIndigo },
  { name: 'blue', color: palette.colorBlue },
], [
  { name: 'light-blue', color: palette.colorLightBlue },
  { name: 'cyan', color: palette.colorCyan },
  { name: 'teal', color: palette.colorTeal },
], [
  { name: 'green', color: palette.colorGreen },
  { name: 'light-green', color: palette.colorLightGreen },
  { name: 'lime', color: palette.colorLime },
], [
  { name: 'yellow', color: palette.colorYellow },
  { name: 'amber', color: palette.colorAmber },
  { name: 'orange', color: palette.colorOrange },
  { name: 'deep-orange', color: palette.colorDeepOrange },
], [
  { name: 'brown', color: palette.colorBrown },
  { name: 'grey', color: palette.colorGrey },
  { name: 'blue-grey', color: palette.colorBlueGrey },
]];

const colorAliases = [{
  heading: 'Feedback',
  colors: [[
    { name: 'feedback-success', color: aliases.colorFeedbackSuccess },
    { name: 'feedback-info', color: aliases.colorFeedbackInfo },
  ], [
    { name: 'feedback-danger', color: aliases.colorFeedbackDanger },
    { name: 'feedback-error', color: aliases.colorFeedbackError },
  ], [
    { name: 'feedback-neutral', color: aliases.colorFeedbackNeutral },
  ]],
}, {
  heading: 'Sentiment',
  colors: [[
    { name: 'sentiment-positive', color: aliases.colorSentimentPositive },
    { name: 'sentiment-neutral', color: aliases.colorSentimentNeutral },
    { name: 'sentiment-negative', color: aliases.colorSentimentNegative },
  ]],
}, {
  heading: 'Gender',
  colors: [[
    { name: 'gender-male', color: aliases.colorGenderMale },
    { name: 'gender-female', color: aliases.colorGenderFemale },
  ]],
}, {
  heading: 'Account types',
  colors: [[
    { name: 'account-type-individual', color: aliases.colorAccountTypeIndividual },
    { name: 'account-type-organisational', color: aliases.colorAccountTypeOrganisational },
  ]],
}];

const colorPaletteFlattened =
  colorPalette.reduce((acc, colors) => {
    colors.forEach((color) => {
      acc.push(color);
    });

    return acc;
  }, []);

const colorAliasesFlattened =
  colorAliases.reduce((acc, group) => {
    group.colors.forEach((colors) => {
      colors.forEach((color) => {
        acc.push(color);
      });
    });

    return acc;
  }, []);

const colors = [
  ...colorPaletteFlattened,
  ...colorAliasesFlattened,
];

const colorVariations = colors.reduce((acc, { color }) => {
  Object.keys(color).forEach((variation) => {
    if (!acc.includes(variation)) {
      acc.push(variation);
    }
  });

  return acc;
}, []);

module.exports = {
  ...palette,
  ...aliases,

  dropShadowLight: '0 0 1px 0 rgba(44, 54, 67, 0.10)',
  dropShadowBase: '0 0 1px 0 rgba(44, 54, 67, 0.25)',
  dropShadowDark: '0 0 1px 0 rgba(44, 54, 67, 0.40)',

  colorLuminancePoint: 0.50,
  colorBaseVariation: 500,
  colorAccentBaseVariation: 'A400',

  colorPalette,
  colorPaletteFlattened,
  colorAliases,
  colorAliasesFlattened,

  colors,
  colorVariations,
  colorIds: [
    'primary',
    ...colors.map(({ name }) => name),
  ],
};
