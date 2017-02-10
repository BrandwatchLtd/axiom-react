import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button, ButtonIcon } from 'bw-axiom';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Joined button group">
        <Snippet>
          <ButtonGroup joined={ true }>
            <Button style="secondary">Action</Button>
            <Button style="secondary">Twitter</Button>
            <Button style="secondary">
              <ButtonIcon name="twitter" />
            </Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
