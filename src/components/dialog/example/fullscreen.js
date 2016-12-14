import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button, Dialog } from 'bw-axiom';
import DialogDemo from './DialogDemo';

export default class DialogExample extends Component {
  componentWillMount() {
    this.closeDialog();
  }

  openDialog() {
    this.setState({ isOpen: true });
  }

  closeDialog() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Example name="Fullscreen Dialog">
        <ButtonGroup>
          <Button onClick={ ::this.openDialog }>
            Open Fullscreen Dialog
            <DialogDemo
                fullscreen={ true }
                isOpen={ this.state.isOpen }
                onRequestClose={ ::this.closeDialog }
                withFooter={ true }
                withTitle={ true } />
          </Button>
        </ButtonGroup>

        <Snippet>
          <Dialog fullScreen={ true } renderSkip={ true }>...</Dialog>
        </Snippet>
      </Example>
    );
  }
}
