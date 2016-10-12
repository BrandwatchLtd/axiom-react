export const title = 'Table';
export const id = 'table';
export const location = 'bw-axiom/components/table';

export const components = [
  require('../Table').default,
  require('../Thead').default,
  require('../Tbody').default,
  require('../Tr').default,
  require('../Th').default,
  require('../Td').default,
];

export const examples = [
  require('./base').default,
  require('./stripey').default,
  require('./bordered').default,
  require('./sortable').default,
];
