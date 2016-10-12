import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Button sizes">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { Button.__ax_propTypes.size.oneOf.map((size, index) =>
              <Button key={ index } size={ size }>
                Button ({ size.toUpperCase() })
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
