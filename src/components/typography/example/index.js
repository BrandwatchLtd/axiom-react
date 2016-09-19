import Heading from '../Heading';
import Italic from '../Italic';
import Link from '../Link';
import List from '../List';
import ListItem from '../ListItem';
import Paragraph from '../Paragraph';
import Small from '../Small';
import Strike from '../Strike';
import Strong from '../Strong';
import Underline from '../Underline';
import Weak from '../Weak';

import { default as headings } from './headings';
import * as paragraph from './paragraph';
import { default as decoration } from './decoration';
import * as alignment from './alignment';
import { default as cases } from './case';
import * as colors from './colors';
import { default as links } from './links';
import * as lists from './lists';

export const title = 'Typography';
export const id = 'typography';
export const location = 'bw-axiom/components/typography';
export const components = [
  Heading,
  Italic,
  Link,
  List,
  ListItem,
  Paragraph,
  Small,
  Strike,
  Strong,
  Underline,
  Weak,
];

export const examples = [{
  name: 'Headings',
  snippet: headings,
}, {
  name: 'Paragraph',
  snippet: [{
    name: 'Standard',
    snippet: paragraph.standard,
  }, {
    name: 'Strong',
    snippet: paragraph.strong,
  }, {
    name: 'Weak',
    snippet: paragraph.weak,
  }, {
    name: 'Small',
    snippet: paragraph.small,
  }],
}, {
  name: 'Decoration modifiers',
  snippet: decoration,
}, {
  name: 'Alignment modifiers',
  snippet: alignment.base,
}, {
  name: 'Alignment modifiers (Responsive)',
  snippet: alignment.responsive,
}, {
  name: 'Case modifiers',
  snippet: cases,
}, {
  name: 'Colors',
  snippet: [{
    name: 'Palette Colors',
    snippet: colors.palette,
  }, {
    name: 'UI Colors',
    snippet: colors.ui,
  }, {
    name: 'Scheme Primary',
    snippet: colors.primary,
  }],
}, {
  name: 'Links',
  snippet: links,
}, {
  name: 'Lists',
  snippet: [{
    name: 'Ordered',
    snippet: lists.ordered,
  }, {
    name: 'Unordered',
    snippet: lists.unordered,
  }, {
    name: 'Inline',
    snippet: lists.inline,
  }],
}];
