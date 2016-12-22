import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { TextInput } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="Text input sizes">
        <Snippet>
          <TextInput
              label="Small/Standard text input"
              placeholder="Small/Standard text input" />

          <TextInput
              label="Large text input"
              placeholder="Large text input"
              size="large" />
        </Snippet>
      </Example>
    );
  }
}
