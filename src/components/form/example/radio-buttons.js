import React from 'react';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';

export const base = (
  <RadioButtonGroup>
    <RadioButton>Unchecked radio button</RadioButton>
    <RadioButton defaultChecked={ true }>Checked radio button</RadioButton>
    <RadioButton disabled={ true }>Disabled radio button</RadioButton>
  </RadioButtonGroup>
);

export const inline = (
  <RadioButtonGroup inline={ true }>
    <RadioButton name="radio-inline">Radio button</RadioButton>
    <RadioButton name="radio-inline">Radio button</RadioButton>
    <RadioButton name="radio-inline">Radio button</RadioButton>
  </RadioButtonGroup>
);
