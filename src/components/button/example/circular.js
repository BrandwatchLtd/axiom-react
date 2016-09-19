import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';

export default (
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
);
