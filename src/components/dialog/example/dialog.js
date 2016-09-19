import React from 'react';
import Dialog from '../Dialog';
import DialogTitle from '../DialogTitle';
import DialogBody from '../DialogBody';
import DialogFooter from '../DialogFooter';

export default (
  <Dialog renderSkip={ true }>
    <DialogTitle onRequestClose={ Function }>...</DialogTitle>
    <DialogBody>...</DialogBody>
    <DialogFooter>...</DialogFooter>
  </Dialog>
);
