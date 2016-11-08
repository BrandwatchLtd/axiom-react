export const title = 'Button';
export const id = 'button';
export const location = 'bw-axiom/components/button';

export const components = [
  require('../Button').default,
  require('../ButtonGroup').default,
];

export const examples = [
  require('./styles').default,
  require('./sizes').default,
  require('./circular').default,
  require('./full-width').default,
  require('./icon').default,
  require('./group').default,
];
