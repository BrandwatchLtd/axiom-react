import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Avatar, Candytar, Image, Paragraph } from 'bw-axiom';

export default class ImageExample extends Component {
  render() {
    return (
      <Example name="Image fallback">
        <Paragraph>
          As a precautionary measure, Images can be given a child to render
          if the first image fails to load. This pattern can be stacked
          as many times as you like. This doesn't have to be an image fallback.
        </Paragraph>

        <Snippet>
          <Image src="assets/WRONG.jpg">
            <Image src="assets/WRONG_AGAIN.jpg">
              <Image src="assets/axiom-bg.jpg" />
            </Image>
          </Image>
        </Snippet>

        <Snippet>
          <Avatar size="8rem" src="assets/WRONG.jpg">
            <Candytar size="8rem" />
          </Avatar>
        </Snippet>
      </Example>
    );
  }
}
