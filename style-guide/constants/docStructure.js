/**
 * ./docs/index.docs.js isn't listed here but it is the default route chosen in
 * ./style-guide/Routes.js.
 */
export default {
  'Axiom': [
    require('../../docs/axiom/about/index.docs.js'),
    require('../../docs/axiom/getting-started/index.docs.js'),
    require('../../docs/axiom/writing-docs/index.docs.js'),
  ],
  'Components': [
    require('../../docs/components/select/index.docs.js'),
    require('../../docs/components/code/index.docs.js'),
  ],
};
