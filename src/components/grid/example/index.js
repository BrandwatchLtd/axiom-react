import { default as Grid } from '../Grid';
import { default as GridCell } from '../GridCell';

import { default as basic } from './basic';
import * as gutters from './gutters';
import { default as responsiveSuppressor } from './responsive-suppressor';
import * as widthGrid from './width-grid';
import * as widthGridCell from './width-grid-cell';
import * as alignment from './alignment';

export const title = 'Grid';
export const id ='grid';
export const location = 'bw-axiom/components/grid';
export const components = [ Grid, GridCell ];

export const examples = [{
  name: 'Basic Grid',
  snippet: basic,
}, {
  name: 'Gutter modifiers',
  snippet: [{
    name: 'No vertical gutters',
    snippet: gutters.noVertical,
  }, {
    name: 'No horizontal gutters',
    snippet: gutters.noHorizontal,
  }, {
    name: 'No vertical or horizontal gutters',
    snippet: gutters.noVerticalNoHorizontal,
  }],
}, {
  name: 'Gutter sizing modifiers',
  snippet: gutters.sizing,
}, {
  name: 'Responsive suppressor',
  snippet: responsiveSuppressor,
}, {
  name: 'Flex widths (grid level)',
  snippet: [{
    name: 'Full width',
    snippet: widthGrid.full,
  }, {
    name: 'Fit (equal widths)',
    snippet: widthGrid.fit,
  }],
}, {
  name: 'Responsive flex sizing (grid level)',
  snippet: [{
    name: 'Full width',
    snippet: widthGrid.fullResponsive,
  }, {
    name: 'Fit (equal widths)',
    snippet: widthGrid.fitResponsive,
  }],
}, {
  name: 'Flex sizing (cell level)',
  snippet: [{
    name: 'Full width (cell level)',
    snippet: widthGridCell.full,
  }, {
    name: 'Shrink (to contents)',
    snippet: widthGridCell.shrink,
  }],
}, {
  name: 'Responsive flex sizing (cell level)',
  snippet: [{
    name: 'Full width',
    snippet: widthGridCell.fullResponsive,
  }, {
    name: 'Shrink (to contents)',
    snippet: widthGridCell.shrinkResponsive,
  }],
}, {
  name: 'Standard base 12 cell sizing',
  snippet: widthGridCell.base12,
}, {
  name: 'Responsive 12 base cell sizing',
  snippet: widthGridCell.base12Responsive,
}, {
  name: 'Vertical cell alignment modifiers (Grid level)',
  snippet: alignment.gridVertical,
}, {
  name: 'Vertical cell alignment modifiers (Cell level)',
  snippet: alignment.gridCellVertical,
}, {
  name: 'Horizontal cell alignment modifiers',
  snippet: alignment.gridCellHorizontal,
}];
