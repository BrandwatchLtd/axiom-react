import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Paragraph } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Colors">
        <Snippet>
          <Paragraph textColor="dark">This color is dark</Paragraph>
          <Paragraph textColor="disabled">This color is disabled</Paragraph>
          <Paragraph textColor="error">This color is error</Paragraph>
          <Paragraph textColor="light">This color is light</Paragraph>
          <Paragraph textColor="subtle">This color is subtle</Paragraph>
          <Paragraph textColor="success">This color is success</Paragraph>
          <Paragraph textColor="warning">This color is warning</Paragraph>
        </Snippet>
      </Example>
    );
  }
}
