import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Full width buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { Button.__ax_propTypes.full.oneOf.map((at, index) =>
              <Button full={ at } key={ index }>
                { at === true ? 'Always full width' : `Full width at ${at}` }
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
