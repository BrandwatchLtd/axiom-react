import React from 'react';
import EditableTitle from './EditableTitle';
import EditableLine from './EditableLine';
import Heading from '../Typography/Heading';

export default {
  title: 'Components/Editable',
  component: EditableLine,
};

export function Default() {
  return (
    <EditableTitle>
      <Heading textSize="headline">
        <EditableLine
            onChange={ function() {} }
            placeholder="Editable text here"
            value="Editable text..."/>
      </Heading>
    </EditableTitle>
  );
}
