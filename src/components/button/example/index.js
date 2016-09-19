import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import * as colors from './colors';
import { default as outlined } from './outlined';
import { default as sizes } from './sizes';
import { default as circular } from './circular';
import { default as fullWidth } from './full-width';
import { default as icon } from './icon';
import { default as group } from './group';
import { default as groupJoined } from './group-joined';

export const title = 'Button';
export const id = 'button';
export const location = 'bw-axiom/components/button';
export const components = [ Button, ButtonGroup ];

export const examples = [{
  name: 'Colored Buttons',
  snippet: [{
    name: 'Palette Colors',
    snippet: colors.palette,
  }, {
    name: 'UI Colors',
    snippet: colors.ui,
  }, {
    name: 'Scheme primary',
    snippet: colors.primary,
  }],
}, {
  name: 'Outlined',
  snippet: outlined,
}, {
  name: 'Sizes',
  snippet: sizes,
}, {
  name: 'Circular',
  snippet: circular,
}, {
  name: 'Full width',
  snippet: fullWidth,
}, {
  name: 'Button with an Icon',
  description: 'Button Group handles spacing buttons that may overflow to a new line. All buttons should be wrapped inside a button group.',
  snippet: icon,
}, {
  name: 'Button group',
  snippet: group,
}, {
  name: 'Button group joined',
  snippet: groupJoined,
}];
