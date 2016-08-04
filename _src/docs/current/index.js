import { V_CURRENT } from 'style-guide/constants/Versions'

module.exports = {
  id: V_CURRENT,
  children: [{
    id: 'axiom',
    children: [
      { id: 'about', children: require('./axiom/about.md') },
      { id: 'getting-started', children: require('./axiom/getting-started.md') },
      { id: 'writing-docs', children: require('./axiom/writing-docs.md') },
    ],
  }, {
    id: 'design-patterns',
    children: [
      { id: 'color-palette', children: require('./design-patterns/color-palette.md') },
      { id: 'ui-colors', children: require('./design-patterns/ui-colors.md') },
      { id: 'branding', children: require('./design-patterns/branding.md') },
      { id: 'date-and-time', children: require('./design-patterns/date-and-time.md') },
      { id: 'numbers', children: require('./design-patterns/numbers.md') },
    ],
  }, {
    id: 'writing-and-voice',
    children: [
      { id: 'character', children: require('./writing-and-voice/character.md') },
      { id: 'text', children: require('./writing-and-voice/text.md') },
    ],
  }, {
    id: 'components',
    children: [
      { id: 'avatar', children: require('./components/avatar.md') },
      { id: 'button', children: require('./components/button.md') },
      { id: 'dialog', children: require('./components/dialog.md') },
      { id: 'form', children: require('./components/form.md') },
      { id: 'grid', children: require('./components/grid.md') },
      { id: 'icon', children: require('./components/icon.md'), hidden: true },
      { id: 'icons', children: require('./components/icons.md') },
      { id: 'label', children: require('./components/label.md') },
      { id: 'status-indicator', children: require('./components/status-indicator.md') },
      { id: 'table', children: require('./components/table.md') },
      { id: 'tabset', children: require('./components/tabset.md') },
      { id: 'typography', children: require('./components/typography.md') },
    ],
  }],
};
