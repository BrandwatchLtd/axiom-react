import React from 'react';
import CheckBox from '../CheckBox';
import CheckBoxGroup from '../CheckBoxGroup';

export const base = (
  <CheckBoxGroup>
    <CheckBox>Unchecked check box</CheckBox>
    <CheckBox defaultChecked={ true }>Checked check box</CheckBox>
    <CheckBox disabled={ true }>Disabled check box</CheckBox>
  </CheckBoxGroup>
);

export const inline = (
  <CheckBoxGroup inline={ true }>
    <CheckBox>Check box</CheckBox>
    <CheckBox>Check box</CheckBox>
    <CheckBox>Check box</CheckBox>
  </CheckBoxGroup>
);
