import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Icon, Button, TextInput } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="Text inputs with additional Components">
        <Snippet>
          <TextInput
              label="Text input with a Button"
              placeholder="Button input...">
            <Button>Submit</Button>
          </TextInput>
        </Snippet>

        <Snippet>
          <TextInput
              label="Text input with an Icon"
              placeholder="Icon input...">
            <Icon name="cross" />
          </TextInput>
        </Snippet>

        <Snippet>
          <TextInput
              label="Text input with a button and an Icon"
              placeholder="Icon and Button input...">
            <Icon name="cross" />
            <Button>Submit</Button>
          </TextInput>
        </Snippet>
      </Example>
    );
  }
}
