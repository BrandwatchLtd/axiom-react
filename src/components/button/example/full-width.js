import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export default (
  <ButtonGroup snippetIgnore={ true }>
    { Button.__ax_propTypes.full.oneOf.map((at, index) =>
      <Button full={ at } key={ index }>
        { at === true ? 'Always full width' : `Full width at ${at}` }
      </Button>
    ) }
  </ButtonGroup>
);
