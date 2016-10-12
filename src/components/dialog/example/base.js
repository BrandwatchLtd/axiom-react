import React, { Component } from 'react';
import Dialog from '../Dialog';
import DialogTitle from '../DialogTitle';
import DialogBody from '../DialogBody';
import DialogFooter from '../DialogFooter';
import Paragraph from '../../typography/Paragraph';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class DialogExample extends Component {
  render() {
    return (
      <Example name="Dialog">
        <Paragraph>
          The Dialog component is an interface to the [react-modal](https://github.com/reactjs/react-modal) component. All properties you pass to Dialog will forward to the modal component.
        </Paragraph>

        <Snippet>
          <Dialog renderSkip={ true }>
            <DialogTitle onRequestClose={ Function }>...</DialogTitle>
            <DialogBody>...</DialogBody>
            <DialogFooter>...</DialogFooter>
          </Dialog>
        </Snippet>
      </Example>
    );
  }
}
