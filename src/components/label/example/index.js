import Label from '../Label';
import LabelGroup from '../LabelGroup';

import * as colors from './colors';
import { default as sizes } from './sizes';
import { default as icon } from './icon';
import { default as group } from './group';

export const title = 'Label';
export const id = 'label';
export const location = 'bw-axiom/components/label';
export const components = [ Label, LabelGroup ];

export const examples = [{
  name: 'Colored Labels',
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
  name: 'Label sizes',
  snippet: sizes,
}, {
  name: 'Label with an Icon',
  snippet: icon,
}, {
  name: 'Label Group',
  snippet: group,
}];
