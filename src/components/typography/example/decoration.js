import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Paragraph, Italic, Underline, Strike } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Decoration">
        <Snippet>
          <Paragraph><Italic>This text is italicised</Italic></Paragraph>
          <Paragraph><Underline>This text is underlined</Underline></Paragraph>
          <Paragraph><Strike>This text is strike through</Strike></Paragraph>
        </Snippet>
      </Example>
    );
  }
}
