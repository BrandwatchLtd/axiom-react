import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Dialog from '../Dialog';
import DialogHeader from '../DialogHeader';
import DialogBody from '../DialogBody';
import DialogFooter from '../DialogFooter';
import Paragraph from '../../typography/Paragraph';

export default class DialogExample extends Component {
  render() {
    return (
      <Example name="Dialog">
        <Paragraph>
          The Dialog component is an interface to the [react-modal](https://github.com/reactjs/react-modal) component. All properties you pass to Dialog will forward to the modal component.
        </Paragraph>

        <Snippet>
          <Dialog renderSkip={ true }>
            <DialogHeader onRequestClose={ Function }>...</DialogHeader>
            <DialogBody>...</DialogBody>
            <DialogFooter>...</DialogFooter>
          </Dialog>
        </Snippet>
      </Example>
    );
  }
}
