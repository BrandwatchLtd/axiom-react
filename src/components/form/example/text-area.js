import React, { Component } from 'react';
import TextArea from '../TextArea';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="Text area">
        <Snippet>
          <TextArea placeholder="Text area" />
        </Snippet>
      </Example>
    );
  }
}
