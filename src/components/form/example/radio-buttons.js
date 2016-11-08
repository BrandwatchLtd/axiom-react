import React, { Component } from 'react';
import Heading from '../../typography/Heading';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="RadioButtons">
        <Snippet>
          <RadioButtonGroup>
            <RadioButton>Unchecked Radio button</RadioButton>
            <RadioButton defaultChecked={ true }>Checked Radio button</RadioButton>
            <RadioButton disabled={ true }>Disabled Radio button</RadioButton>
          </RadioButtonGroup>
        </Snippet>

        <Heading>Inline RadioButtons</Heading>
        <Snippet>
          <RadioButtonGroup inline={ true }>
            <RadioButton>Radio button</RadioButton>
            <RadioButton>Radio button</RadioButton>
            <RadioButton>Radio button</RadioButton>
          </RadioButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
