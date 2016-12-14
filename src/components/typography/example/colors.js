import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Paragraph } from 'bw-axiom';

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
