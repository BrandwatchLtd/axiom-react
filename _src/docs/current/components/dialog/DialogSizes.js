import React, { Component } from 'react';
import { Button, ButtonGroup } from 'bw-axiom/react';
import { Dialog } from 'bw-axiom/react';
import DialogExample from './DialogExample';

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
      <ButtonGroup>
        {
          Dialog.__ax_propTypes.size.oneOf.map((size) => {
            return (
              <Button key={ size } onClick={ ::this.openDialog(size) }>
                Open { size.toUpperCase() } Dialog
                <DialogExample
                    isOpen={ this.state[size] }
                    onRequestClose={ ::this.closeDialog(size) }
                    size={ size }
                    withFooter={ true }
                    withTitle={ true } />
              </Button>
            );
          })
        }
      </ButtonGroup>
    );
  }
}
