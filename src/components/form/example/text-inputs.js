import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { TextInput } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="TextInputs">
        <Snippet>
          <TextInput
              label="Standard"
              placeholder="Standard input..." />
          <TextInput
              disabled={ true }
              label="Disabled"
              placeholder="Disabled input..." />
          <TextInput
              label="Valid"
              placeholder="Valid input..."
              valid={ true } />
          <TextInput
              invalid={ true }
              label="Invalid"
              placeholder="Invalid input..." />
        </Snippet>
      </Example>
    );
  }
}
