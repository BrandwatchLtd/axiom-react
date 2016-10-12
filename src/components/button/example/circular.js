import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Circular buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { Button.__ax_propTypes.size.oneOf.map((size, index) =>
              <Button circular={ true } key={ index } size={ size }>
                <Icon name="bolt" snippetReplace={ true } />
              </Button>
            ) }

            { Button.__ax_propTypes.size.oneOf.map((size, index) =>
              <Button circular={ true } key={ index } outlined={ true } size={ size }>
                <Icon name="bolt" snippetReplace={ true } />
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
