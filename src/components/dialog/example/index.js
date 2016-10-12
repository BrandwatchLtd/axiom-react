export const title = 'Dialog';
export const id ='dialog';
export const location = 'bw-axiom/components/dialog';

export const components = [
  require('../Dialog').default,
  require('../DialogBody').default,
  require('../DialogFooter').default,
  require('../DialogTitle').default,
];

export const examples = [
  require('./base').default,
  require('./sizes').default,
  require('./fullscreen').default,
];
