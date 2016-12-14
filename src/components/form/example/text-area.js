import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { TextArea } from 'bw-axiom';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="Text area">
        <Snippet>
          <TextArea
              label="Text area label"
              placeholder="Text area" />
        </Snippet>
      </Example>
    );
  }
}
