import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Heading from '../../typography/Heading';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="RadioButtons">
        <Snippet>
          <RadioButtonGroup>
            <RadioButton>Unchecked Radio button</RadioButton>
            <RadioButton defaultChecked={ true }>Checked Radio button</RadioButton>
            <RadioButton disabled={ true }>Disabled Radio button</RadioButton>
            <RadioButton defaultChecked={ true } disabled={ true }>Disabled checked Radio button</RadioButton>
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
