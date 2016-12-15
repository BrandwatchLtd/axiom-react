import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { CheckBox, CheckBoxGroup, Heading } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="CheckBoxes">
        <Snippet>
          <CheckBoxGroup>
            <CheckBox>Unchecked check box</CheckBox>
            <CheckBox defaultChecked={ true }>Checked check box</CheckBox>
            <CheckBox disabled={ true }>Disabled check box</CheckBox>
            <CheckBox defaultChecked={ true } disabled={ true }>
              Disabled checked check box
            </CheckBox>
          </CheckBoxGroup>
        </Snippet>

        <Heading>Inline Checkboxes</Heading>
        <Snippet>
          <CheckBoxGroup inline={ true }>
            <CheckBox>Check box</CheckBox>
            <CheckBox>Check box</CheckBox>
            <CheckBox>Check box</CheckBox>
          </CheckBoxGroup>
        </Snippet>
      </Example>
    );
  }
}
