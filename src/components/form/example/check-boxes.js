import React, { Component } from 'react';
import CheckBox from '../CheckBox';
import CheckBoxGroup from '../CheckBoxGroup';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="CheckBoxes">
        <Snippet>
          <CheckBoxGroup>
            <CheckBox>Unchecked check box</CheckBox>
            <CheckBox defaultChecked={ true }>Checked check box</CheckBox>
            <CheckBox disabled={ true }>Disabled check box</CheckBox>
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
