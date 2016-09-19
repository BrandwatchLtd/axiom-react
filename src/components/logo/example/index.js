import LogoHorizontal from '../LogoHorizontal';
import LogoVertical from '../LogoVertical';

import { default as horizontal } from './horizontal';
import { default as vertical } from './vertical';

export const title = 'Logo';
export const id = 'logo';
export const location = 'bw-axiom/components/logo';
export const components = [ LogoHorizontal, LogoVertical ];

export const examples = [{
  name: 'Horizontal',
  snippet: horizontal,
}, {
  name: 'Vertical',
  snippet: vertical,
}];
