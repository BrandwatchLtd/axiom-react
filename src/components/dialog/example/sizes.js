import React, { Component } from 'react';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import Dialog from '../Dialog';
import DialogDemo from './DialogDemo';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class DialogSizes extends Component {
  static propTypes = {};

  componentWillMount() {
    Dialog.__ax_propTypes.size.oneOf.forEach((size) => {
      this.closeDialog(size)();
    });
  }

  openDialog(size) {
    return () => {
      this.setState({ [size]: true });
    };
  }

  closeDialog(size) {
    return () => {
      this.setState({ [size]: false });
    };
  }

  render() {
    return (
      <Example name="Sized Dialogs">
        <ButtonGroup>
          { Dialog.__ax_propTypes.size.oneOf.map((size) =>
            <Button key={ size } onClick={ ::this.openDialog(size) }>
              Open { size.toUpperCase() } Dialog
              <DialogDemo
                  isOpen={ this.state[size] }
                  onRequestClose={ ::this.closeDialog(size) }
                  size={ size }
                  withFooter={ true }
                  withTitle={ true } />
            </Button>
          ) }
        </ButtonGroup>

        <Snippet>
          { Dialog.__ax_propTypes.size.oneOf.map((size, index) =>
            <Dialog key={ index } renderSkip={ true } size={ size }>...</Dialog>
          ) }
        </Snippet>
      </Example>
    );
  }
}
