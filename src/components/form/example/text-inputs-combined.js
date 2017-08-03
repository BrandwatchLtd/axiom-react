import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { TextInput, TextInputIcon } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="Text inputs with additional Components">
        <Snippet>
          <TextInput
              label="Text input with an Icon on the Right"
              placeholder="Icon input...">
            <TextInputIcon name="cross" onClick={ () => window.alert('Deleted something?') } />
          </TextInput>
          <TextInput
              label="Text input with an Icon on the Left"
              placeholder="Icon input...">
            <TextInputIcon
                align="left"
                name="magnify-glass" />
          </TextInput>
        </Snippet>
      </Example>
    );
  }
}
