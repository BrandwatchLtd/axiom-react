import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Buttons with an Icon">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            <Button color="red" size="small">
              Small <Icon name="trash" />
            </Button>

            <Button color="yellow" size="medium">
              Regular <Icon name="warning" />
            </Button>

            <Button color="green" size="large">
              Large <Icon name="check" />
            </Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
