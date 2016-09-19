import React from 'react';
import Dialog from '../Dialog';
import DialogSizes from './DialogSizes';

export default [
  <DialogSizes snippetSkip={ true } />,
  Dialog.__ax_propTypes.size.oneOf.map((size, index) =>
    <Dialog key={ index } renderSkip={ true } size={ size }>...</Dialog>
  ),
];
