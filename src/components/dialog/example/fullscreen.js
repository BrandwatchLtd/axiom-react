import React, { Component } from 'react';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import Dialog from '../Dialog';
import DialogDemo from './DialogDemo';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
