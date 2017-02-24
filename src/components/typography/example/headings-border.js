import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Headings with underline">
        <Snippet>
          <Heading style="display" underline={ true }>
            Display with an underline
          </Heading>

          <Heading style="headline" underline={ true }>
            Headline with an underline
          </Heading>
        </Snippet>
      </Example>
    );
  }
}
