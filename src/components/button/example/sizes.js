import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export default (
  <ButtonGroup snippetIgnore={ true }>
    { Button.__ax_propTypes.size.oneOf.map((size, index) =>
      <Button key={ index } size={ size }>
        Button ({ size.toUpperCase() })
      </Button>
    ) }
  </ButtonGroup>
);
