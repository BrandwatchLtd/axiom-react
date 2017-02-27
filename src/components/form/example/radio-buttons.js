import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { RadioButton, RadioButtonGroup } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="RadioButtons">
        <Snippet>
          <RadioButtonGroup>
            <RadioButton name="radio1">Unchecked Radio button</RadioButton>
            <RadioButton defaultChecked={ true } name="radio1">Checked Radio button</RadioButton>
            <RadioButton disabled={ true } name="radio1">Disabled Radio button</RadioButton>
            <RadioButton defaultChecked={ true } disabled={ true } name="radio2">
              Disabled checked Radio button
            </RadioButton>
          </RadioButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
