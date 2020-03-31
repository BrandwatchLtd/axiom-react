/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import CheckBox from './CheckBox';
import CheckBoxGroup from './CheckBoxGroup';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

export function Default() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBoxGroup>
      <CheckBox
          checked={ checked }
          name="lorem"
          onChange={ () => setChecked(c => !c) }
          title="Lorem ipsum dolor sit amet">
        Lorem ipsum
      </CheckBox>
    </CheckBoxGroup>
  );
}

export function CheckBoxGroups() {
  const ToggableCheckBox = ({ children }) => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
          checked={ checked }
          name="lorem"
          onChange={ () => setChecked(c => !c) }
          title="Lorem ipsum dolor sit amet">
        { children }
      </CheckBox>
    );
  };
  return (
    <CheckBoxGroup>
      <ToggableCheckBox>Apples</ToggableCheckBox>
      <ToggableCheckBox>Pears</ToggableCheckBox>
    </CheckBoxGroup>
  );
}
