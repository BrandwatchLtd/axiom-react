import React, { Component } from 'react';
import Image from '../Image';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="Base Image">
        <Snippet>
          <Image src="/assets/axiom-bg.jpg" />
        </Snippet>
      </Example>
    );
  }
}
