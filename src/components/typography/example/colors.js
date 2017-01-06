import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Paragraph } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Colors">
        <Snippet>
          <Paragraph textSubtle={ true }>This color is subtle</Paragraph>
          <Paragraph textDisabled={ true }>This color is disabled</Paragraph>
        </Snippet>
      </Example>
    );
  }
}
