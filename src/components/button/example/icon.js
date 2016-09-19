import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';

export default (
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
);
