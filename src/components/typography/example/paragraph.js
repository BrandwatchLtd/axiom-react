import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Heading,
  Paragraph,
  Small,
  Strong,
  Subscript,
  Superscript,
  Weak,
} from 'bw-axiom';

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

        <Heading>Weak</Heading>
        <Snippet>
          <Paragraph>
            <Weak>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula,
            sit amet bibendum diam lectus eu erat.</Weak>
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

        <Heading>Subscript</Heading>
        <Snippet>
          <Heading style="display">22<Subscript>K</Subscript></Heading>
          <Heading style="headline">22<Subscript>K</Subscript></Heading>
          <Heading style="title">22<Subscript>K</Subscript></Heading>
          <Heading style="large">22<Subscript>K</Subscript></Heading>
          <Paragraph>22<Subscript>K</Subscript></Paragraph>
        </Snippet>

        <Heading>Superscript</Heading>
        <Snippet>
          <Heading style="display">22<Superscript>%</Superscript></Heading>
          <Heading style="headline">22<Superscript>%</Superscript></Heading>
          <Heading style="title">22<Superscript>%</Superscript></Heading>
          <Heading style="large">22<Superscript>%</Superscript></Heading>
          <Paragraph>22<Superscript>%</Superscript></Paragraph>
        </Snippet>
      </Example>
    );
  }
}
