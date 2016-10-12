import React, { Component } from 'react';
import Billboard from '../Billboard';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class BillboardExample extends Component {
  render() {
    return (
      <Example name="Image Billboard">
        <Snippet>
          <Billboard color="grey" image="/assets/axiom-bg.jpg" variation="900">
            I am a billboard with an image!
          </Billboard>
        </Snippet>
      </Example>
    );
  }
}
