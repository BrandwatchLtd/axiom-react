import React, { Component } from 'react';
import Paragraph from '../Paragraph';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Case modifiers">
        <Snippet>
          <Paragraph textCase="upper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.
          </Paragraph>
          <Paragraph textCase="capital">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.
          </Paragraph>
          <Paragraph textCase="lower">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.
          </Paragraph>
        </Snippet>
      </Example>
    );
  }
}
