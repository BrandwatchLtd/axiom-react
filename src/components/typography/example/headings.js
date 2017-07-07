import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, Strong } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Headings">
        <Snippet>
          <Heading textSize="display1">
            Display1 / <Strong>Display Strong</Strong>
          </Heading>

          <Heading textSize="display2">
            Display2 / <Strong>Display2 Strong</Strong>
          </Heading>

          <Heading textSize="headline">
            Headline Standard/ <Strong>Headline Strong</Strong>
          </Heading>

          <Heading textSize="title">
            Title / <Strong>Title Strong</Strong>
          </Heading>

          <Heading textSize="large">
            Large / <Strong>Large Strong</Strong>
          </Heading>
        </Snippet>
      </Example>
    );
  }
}
