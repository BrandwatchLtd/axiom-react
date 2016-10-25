import React, { Component } from 'react';
import Paragraph from '../Paragraph';
import Italic from '../Italic';
import Underline from '../Underline';
import Strike from '../Strike';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
