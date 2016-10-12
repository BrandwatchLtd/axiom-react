import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import { colorPalette } from '../../../design-patterns/colors/_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Outlined buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { colorPalette.map((colors, t) =>
              colors.map(({ name }, b) =>
                <Button color={ name } key={ `${t}${b}` } outlined={ true }>
                  <span snippetReplace={ true }>{ name }</span>
                </Button>
              )
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
