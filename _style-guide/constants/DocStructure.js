module.exports = [
  {
    id: 'axiom',
    children: [
      { id: 'about', children: require('bw-axiom/axiom/about.md') },
      { id: 'getting-started', children: require('bw-axiom/axiom/getting-started.md') },
      { id: 'writing-docs', children: require('bw-axiom/axiom/writing-docs.md') },
    ],
  }, {
    id: 'design-patterns',
    children: [
      { id: 'color-palette', children: require('bw-axiom/design-patterns/colors/color-palette.md') },
      { id: 'ui-colors', children: require('bw-axiom/design-patterns/colors/ui-colors.md') },
      { id: 'branding', children: require('bw-axiom/design-patterns/branding/branding.md') },
      { id: 'date-and-time', children: require('bw-axiom/design-patterns/date-and-time/date-and-time.md') },
      { id: 'numbers', children: require('bw-axiom/design-patterns/numbers/numbers.md') },
    ],
  }, {
    id: 'writing-and-voice',
    children: [
      { id: 'character', children: require('bw-axiom/writing-and-voice/character.md') },
      { id: 'text', children: require('bw-axiom/writing-and-voice/text.md') },
    ],
  }, {
    id: 'components',
    children: [
      { id: 'avatar', children: require('bw-axiom/components/avatar/avatar.md') },
      { id: 'button', children: require('bw-axiom/components/button/button.md') },
      { id: 'dialog', children: require('bw-axiom/components/dialog/dialog.md') },
      { id: 'form', children: require('bw-axiom/components/form/form.md') },
      { id: 'grid', children: require('bw-axiom/components/grid/grid.md') },
      { id: 'icon', children: require('bw-axiom/components/icon/icon.md'), hidden: true },
      { id: 'icons', children: require('bw-axiom/components/icon/icons.md') },
      { id: 'label', children: require('bw-axiom/components/label/label.md') },
      { id: 'table', children: require('bw-axiom/components/table/table.md') },
      { id: 'tabset', children: require('bw-axiom/components/tabset/tabset.md') },
      { id: 'typography', children: require('bw-axiom/components/typography/typography.md') },
    ],
  },
];
