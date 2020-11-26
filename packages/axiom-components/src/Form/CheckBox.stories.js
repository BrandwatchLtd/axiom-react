/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CheckBox from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";

export default {
  title: "Form/CheckBox",
  component: CheckBox,
};

export function Default({ children, checked, ...rest }) {
  const [isChecked, setChecked] = useState(checked);

  return (
    <CheckBoxGroup>
      <CheckBox
        checked={isChecked}
        name="lorem"
        onChange={() => setChecked((c) => !c)}
        title="Lorem ipsum dolor sit amet"
        {...rest}
      >
        {children}
      </CheckBox>
    </CheckBoxGroup>
  );
}

Default.args = { children: "Lorem ipsum", checked: false };

export function CheckBoxGroups() {
  const ToggableCheckBox = ({ children }) => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        checked={checked}
        name="lorem"
        onChange={() => setChecked((c) => !c)}
        title="Lorem ipsum dolor sit amet"
      >
        {children}
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

export function Indeterminate() {
  return (
    <CheckBoxGroup>
      <CheckBox
        name="lorem"
        title="Lorem ipsum dolor sit amet"
        onChange={() => {}}
        indeterminate
      >
        Indeterminate
      </CheckBox>
    </CheckBoxGroup>
  );
}

export function Disabled() {
  return (
    <CheckBoxGroup>
      <CheckBox
        name="lorem"
        title="Lorem ipsum dolor sit amet"
        onChange={() => {}}
        checked
        disabled
      >
        Disabled
      </CheckBox>
    </CheckBoxGroup>
  );
}

export function Invaild() {
  return (
    <CheckBoxGroup>
      <CheckBox
        name="lorem"
        title="Lorem ipsum dolor sit amet"
        onChange={() => {}}
        invalid
        checked
      >
        Invalid
      </CheckBox>
    </CheckBoxGroup>
  );
}
