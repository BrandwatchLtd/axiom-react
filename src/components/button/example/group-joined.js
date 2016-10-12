import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Button group joined">
        <Snippet>
          <ButtonGroup joined={ true }>
            <Button color="lime" size="large">
              <Icon name="pencil" />
            </Button>
            <Button color="light-green" size="large">
              A button
            </Button>
            <Button color="green" size="large">
              <Icon name="floppy-o" />
            </Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
