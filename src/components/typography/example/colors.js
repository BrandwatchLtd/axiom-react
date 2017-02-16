import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Paragraph } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Colors">
        <Snippet>
          <Paragraph textColor="subtle">This color is subtle</Paragraph>
          <Paragraph textColor="disabled">This color is disabled</Paragraph>
          <Paragraph textColor="success">This color is success</Paragraph>
          <Paragraph textColor="warning">This color is warning</Paragraph>
          <Paragraph textColor="error">This color is error</Paragraph>
        </Snippet>
      </Example>
    );
  }
}
