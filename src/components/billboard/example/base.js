import React, { Component } from 'react';
import Billboard from '../Billboard';
import Paragraph from '../../typography/Paragraph';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class BillboardExample extends Component {
  render() {
    return (
      <Example name="Base Billboard">
        <Paragraph>
          Takes one of the palette or context colour ids as well as a variation [optional].
        </Paragraph>

        <Snippet>
          <Billboard color="grey" variation="900">
            I am a billboard.
          </Billboard>
        </Snippet>
      </Example>
    );
  }
}
