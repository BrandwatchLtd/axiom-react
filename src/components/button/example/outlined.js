import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import { colorPalette } from '../../../design-patterns/colors/_vars';

export default (
  <ButtonGroup snippetIgnore={ true }>
    { colorPalette.map((colors, t) =>
      colors.map(({ name }, b) =>
        <Button color={ name } key={ `${t}${b}` } outlined={ true }>
          <span snippetReplace={ true }>{ name }</span>
        </Button>
      )
    ) }
  </ButtonGroup>
);
