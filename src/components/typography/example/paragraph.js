import React, { Component } from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Small from '../Small';
import Strong from '../Strong';
import Weak from '../Weak';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Paragraph">
        <Snippet>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.
          </Paragraph>
        </Snippet>

        <Heading level={ 5 }>Strong</Heading>
        <Snippet>
          <Paragraph>
            <Strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.</Strong>
          </Paragraph>
        </Snippet>

        <Heading level={ 5 }>Weak</Heading>
        <Snippet>
          <Paragraph>
            <Weak>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.</Weak>
          </Paragraph>
        </Snippet>

        <Heading level={ 5 }>Small</Heading>
        <Snippet>
          <Paragraph>
            <Small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.</Small>
          </Paragraph>
        </Snippet>
      </Example>
    );
  }
}
