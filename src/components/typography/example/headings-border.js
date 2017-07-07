import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Headings with underline">
        <Snippet>
          <Heading textSize="display1" textUnderline={ true }>
            Display with an underline
          </Heading>

          <Heading textSize="display2" textUnderline={ true }>
            Display2 with an underline
          </Heading>

          <Heading textSize="headline" textUnderline={ true }>
            Headline with an underline
          </Heading>
        </Snippet>
      </Example>
    );
  }
}
