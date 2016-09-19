import React from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Icon from '../../icon/Icon';

export default (
  <LabelGroup snippetIgnore={ true }>
    <Label color="red" size="small">
      Small <Icon name="trash" />
    </Label>

    <Label color="yellow" size="medium">
      Regular <Icon name="warning" />
    </Label>

    <Label color="green" size="large">
      Large <Icon name="check" />
    </Label>
  </LabelGroup>
);
