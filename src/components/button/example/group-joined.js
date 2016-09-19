import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';

export default (
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
);
