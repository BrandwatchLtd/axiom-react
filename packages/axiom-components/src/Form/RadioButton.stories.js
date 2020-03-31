import React from 'react';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export function Default() {
  return (
    <RadioButtonGroup>
      <RadioButton name="fruit">Apples</RadioButton>
      <RadioButton name="fruit">Pears</RadioButton>
      <RadioButton name="fruit">Oranges</RadioButton>
    </RadioButtonGroup>
  );
}
