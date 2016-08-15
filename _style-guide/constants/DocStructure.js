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
      {
        id: 'avatar',
        children: require('bw-axiom/components/avatar/avatar.md'),
        importsLocation: 'bw-axiom/components/avatar',
        imports: [
          require('bw-axiom/components/avatar/Avatar').default,
        ],
      },
      {
        id: 'billboard',
        children: require('bw-axiom/components/billboard/billboard.md'),
        importsLocation: 'bw-axiom/components/billboard',
        imports: [
          require('bw-axiom/components/billboard/Billboard').default,
        ],
      },
      {
        id: 'button',
        children: require('bw-axiom/components/button/button.md'),
        importsLocation: 'bw-axiom/components/avatar',
        imports: [
          require('bw-axiom/components/button/Button').default,
          require('bw-axiom/components/button/ButtonGroup').default,
        ],
      },
      {
        id: 'dialog',
        children: require('bw-axiom/components/dialog/dialog.md'),
        importsLocation: 'bw-axiom/components/dialog',
        imports: [
          require('bw-axiom/components/dialog/Dialog').default,
          require('bw-axiom/components/dialog/DialogBody').default,
          require('bw-axiom/components/dialog/DialogFooter').default,
          require('bw-axiom/components/dialog/DialogTitle').default,
        ],
      },
      {
        id: 'form',
        children: require('bw-axiom/components/form/form.md'),
        importsLocation: 'bw-axiom/components/form',
        imports: [
          require('bw-axiom/components/form/CheckBox').default,
          require('bw-axiom/components/form/Form').default,
          require('bw-axiom/components/form/RadioButton').default,
          require('bw-axiom/components/form/TextArea').default,
          require('bw-axiom/components/form/TextInput').default,
        ],
      },
      {
        id: 'grid',
        children: require('bw-axiom/components/grid/grid.md'),
        importsLocation: 'bw-axiom/components/form',
        imports: [
          require('bw-axiom/components/grid/Grid').default,
          require('bw-axiom/components/grid/GridCell').default,
        ],
      },
      {
        id: 'icon',
        hidden: true,
        children: require('bw-axiom/components/icon/icon.md'),
        importsLocation: 'bw-axiom/components/icon',
        imports: [
          require('bw-axiom/components/icon/Icon').default,
        ],
      },
      {
        id: 'icons',
        children: require('bw-axiom/components/icon/icons.md'),
        importsLocation: 'bw-axiom/components/icon',
        imports: [
          require('bw-axiom/components/icon/Icon').default,
        ],
      },
      {
        id: 'label',
        children: require('bw-axiom/components/label/label.md'),
        importsLocation: 'bw-axiom/components/label',
        imports: [
          require('bw-axiom/components/label/Label').default,
          require('bw-axiom/components/label/LabelGroup').default,
        ],
      },
      {
        id: 'table',
        children: require('bw-axiom/components/table/table.md'),
        importsLocation: 'bw-axiom/components/table',
        imports: [
          require('bw-axiom/components/table/Table').default,
          require('bw-axiom/components/table/Tbody').default,
          require('bw-axiom/components/table/Td').default,
          require('bw-axiom/components/table/Th').default,
          require('bw-axiom/components/table/Thead').default,
          require('bw-axiom/components/table/Tr').default,
        ],
      },
      {
        id: 'tabset',
        children: require('bw-axiom/components/tabset/tabset.md'),
        importsLocation: 'bw-axiom/components/tabset',
        imports: [
          require('bw-axiom/components/tabset/Tab').default,
          require('bw-axiom/components/tabset/Tabset').default,
        ],
      },
      {
        id: 'typography',
        children: require('bw-axiom/components/typography/typography.md'),
        importsLocation: 'bw-axiom/components/typography',
        imports: [
          require('bw-axiom/components/typography/Heading').default,
          require('bw-axiom/components/typography/Italic').default,
          require('bw-axiom/components/typography/Link').default,
          require('bw-axiom/components/typography/List').default,
          require('bw-axiom/components/typography/ListItem').default,
          require('bw-axiom/components/typography/Paragraph').default,
          require('bw-axiom/components/typography/Small').default,
          require('bw-axiom/components/typography/Strong').default,
          require('bw-axiom/components/typography/Underline').default,
          require('bw-axiom/components/typography/Weak').default,
        ],
      },
    ],
  },
];
