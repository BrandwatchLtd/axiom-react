import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Paragraph } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Case modifiers">
        <Snippet>
          <Paragraph textCase="upper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempus ut felis vitae hendrerit.
          </Paragraph>
          <Paragraph textCase="capital">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempus ut felis vitae hendrerit.
          </Paragraph>
          <Paragraph textCase="lower">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempus ut felis vitae hendrerit.
          </Paragraph>
        </Snippet>
      </Example>
    );
  }
}
