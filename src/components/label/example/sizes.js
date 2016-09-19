import React from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';

export default (
  <LabelGroup snippetIgnore={ true }>
    { Label.__ax_propTypes.size.oneOf.map((size, index) =>
      <Label key={ index } size={ size }>
        Label ({ size.toUpperCase() })
      </Label>
    ) }
  </LabelGroup>
);
