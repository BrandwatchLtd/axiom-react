import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ImageCircle } from 'bw-axiom';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="Circular Image">
        <Snippet>
          <ImageCircle size="10rem" src="assets/avatar.png" />
        </Snippet>
      </Example>
    );
  }
}
