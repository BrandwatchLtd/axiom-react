import Billboard from '../Billboard';

import { default as base } from './base';
import { default as image } from './image';
import { default as overlay } from './overlay';
import { default as sizes } from './sizes';

export const title = 'Billboard';
export const id = 'billboard';
export const location = 'bw-axiom/components/billboard';
export const components = [ Billboard ];

export const examples = [{
  name: 'Base',
  description: 'Takes one of the palette or context colour ids as well as a variation [optional].',
  snippet: base,
}, {
  name: 'Billboard with an image',
  snippet: image,
}, {
  name: 'Billboard with an overlay',
  snippet: overlay,
}, {
  name: 'Billboard sizes',
  snippet: sizes,
}];
