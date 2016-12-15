import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button, Paragraph } from 'bw-axiom';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Button group">
        <Paragraph>
          ButtonGroups keep a consistent flow of spacing between Buttons and
          sibling elements, so liek other inline elements they should always be
          used, even when there is only one button.
        </Paragraph>

        <Snippet>
          <ButtonGroup>
            <Button>A button</Button>
            <Button>A button</Button>
            <Button>A button</Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
