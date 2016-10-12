export const title = 'Typography';
export const id = 'typography';
export const location = 'bw-axiom/components/typography';
export const components = [
  require('../Heading').default,
  require('../Italic').default,
  require('../Link').default,
  require('../List').default,
  require('../ListItem').default,
  require('../Paragraph').default,
  require('../Small').default,
  require('../Strike').default,
  require('../Strong').default,
  require('../Underline').default,
  require('../Weak').default,
];

export const examples = [
  require('./headings').default,
  require('./paragraph').default,
  require('./decoration').default,
  require('./alignment').default,
  require('./case').default,
  require('./colors').default,
  require('./links').default,
  require('./lists').default,
];
