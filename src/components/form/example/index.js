export const title = 'Form';
export const id ='form';
export const location = 'bw-axiom/components/form';
export const components = [
  require('../CheckBox').default,
  require('../CheckBoxGroup').default,
  require('../Form').default,
  require('../RadioButton').default,
  require('../RadioButtonGroup').default,
  require('../TextArea').default,
  require('../TextInput').default,
];

export const examples = [
  require('./text-inputs').default,
  require('./input-combined').default,
  require('./text-area').default,
  require('./check-boxes').default,
  require('./radio-buttons').default,
];
