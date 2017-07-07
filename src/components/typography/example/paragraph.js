import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, Paragraph, Small, Strong } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Paragraph">
        <Snippet>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            iaculis, est dapibus aliquet tristique, ante orci porta ligula,
            sit amet bibendum diam lectus eu erat.
          </Paragraph>
        </Snippet>

        <Heading>Strong</Heading>
        <Snippet>
          <Paragraph>
            <Strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris iaculis, est dapibus aliquet tristique, ante orci porta
            ligula, sit amet bibendum diam lectus eu erat.</Strong>
          </Paragraph>
        </Snippet>

        <Heading>Small</Heading>
        <Snippet>
          <Paragraph>
            <Small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula,
            sit amet bibendum diam lectus eu erat.</Small>
          </Paragraph>
        </Snippet>
      </Example>
    );
  }
}
