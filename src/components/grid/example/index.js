export const title = 'Grid';
export const id ='grid';
export const location = 'bw-axiom/components/grid';

export const components = [
  require('../Grid').default,
  require('../GridCell').default,
];

export const examples = [
  require('./base').default,
  require('./gutter-suppression').default,
  require('./gutter-sizing').default,
  require('./responsive-suppression').default,
  require('./flex-widths-grid').default,
  require('./flex-widths-grid-responsive').default,
  require('./flex-widths-cell').default,
  require('./flex-widths-cell-responsive').default,
  require('./base-12-widths').default,
  require('./base-12-widths-responsive').default,
  require('./alignment-grid').default,
  require('./alignment-grid-cell').default,
];
