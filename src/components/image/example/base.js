import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Image } from 'bw-axiom';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="Base Image">
        <Snippet>
          <Image src="assets/axiom-bg.jpg" />
        </Snippet>
      </Example>
    );
  }
}
