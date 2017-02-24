import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, Strong, Weak } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Headings">
        <Snippet>
          <Heading style="display">
            <Weak>Display Weak</Weak> / Display Standard
          </Heading>

          <Heading style="headline">
            Headline Standard
          </Heading>

          <Heading style="title">
            Title Standard / <Strong>Title Strong</Strong>
          </Heading>

          <Heading style="large">
            Large Standard / <Strong>Large Strong</Strong>
          </Heading>
        </Snippet>
      </Example>
    );
  }
}
