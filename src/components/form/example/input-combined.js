import React, { Component } from 'react';
import Icon from '../../icon/Icon';
import Button from '../../button/Button';
import Heading from '../../typography/Heading';
import TextInput from '../TextInput';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="Text inputs with additional Components">
        <Heading level={ 5 }>Text input with a Button</Heading>
        <Snippet>
          <TextInput placeholder="Button input...">
            <Button>Submit</Button>
          </TextInput>
        </Snippet>

        <Heading level={ 5 }>Text input with an Icon</Heading>
        <Snippet>
          <TextInput placeholder="Icon input...">
            <Icon name="calendar" />
          </TextInput>
        </Snippet>

        <Heading level={ 5 }>Text input with a button and an Icon'</Heading>
        <Snippet>
          <TextInput placeholder="Icon and Button input...">
            <Icon name="calendar" />
            <Button>Submit</Button>
          </TextInput>
        </Snippet>
      </Example>
    );
  }
}
