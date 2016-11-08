import React, { Component } from 'react';
import Paragraph from '../Paragraph';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Colors">
        <Snippet>
          <Paragraph textDark={ true }>This color is dark</Paragraph>
          <Paragraph textSubtle={ true }>This color is subtle</Paragraph>
          <Paragraph textLight={ true }>This color is light</Paragraph>
        </Snippet>
      </Example>
    );
  }
}
