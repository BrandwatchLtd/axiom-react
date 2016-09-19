import CheckBox from '../CheckBox';
import CheckBoxGroup from '../CheckBoxGroup';
import Form from '../Form';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import TextArea from '../TextArea';
import TextInput from '../TextInput';

import * as textInputs from './text-inputs';
import * as inputCombined from './input-combined';
import { default as textArea } from './text-area';
import * as checkboxes from './check-boxes';
import * as radioButtons from './radio-buttons';

export const title = 'Form';
export const id ='form';
export const location = 'bw-axiom/components/form';
export const components = [
  CheckBox,
  CheckBoxGroup,
  Form,
  RadioButton,
  RadioButtonGroup,
  TextArea,
  TextInput,
];

export const examples = [{
  name: 'Text Inputs',
  snippet: [{
    snippet: textInputs.base,
  }, {
    name: 'Validation',
    snippet: textInputs.validation,
  }],
}, {
  name: 'Text inputs with additional Components',
  snippet: [{
    name: 'Text input with an Icon',
    snippet: inputCombined.base,
  }, {
    name: 'Text input with a button',
    snippet: inputCombined.icon,
  }, {
    name: 'Text input with a button and an Icon',
    snippet: inputCombined.buttonAndIcon,
  }],
}, {
  name: 'Textarea',
  snippet: textArea,
}, {
  name: 'Checkboxes',
  snippet: checkboxes.base,
}, {
  name: 'Checkboxes inline',
  snippet: checkboxes.inline,
}, {
  name: 'Radio Buttons',
  snippet: radioButtons.base,
}, {
  name: 'Radio Buttons inline',
  snippet: radioButtons.inline,
}];
