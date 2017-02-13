import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Image, Paragraph } from 'bw-axiom';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="Base Image">
        <Paragraph>
          As a precautionary measure, Images can be given a child to render
          if the first image fails to load. This pattern can be stacked
          as many times as you like.
        </Paragraph>

        <Snippet>
          <Image src="assets/WRONG.jpg">
            <Image src="assets/WRONG_AGAIN.jpg">
              <Image src="assets/axiom-bg.jpg" />
            </Image>
          </Image>
        </Snippet>
      </Example>
    );
  }
}
