import React, { Component } from 'react';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import DialogExample from './DialogExample';

export default class DialogFullscreen extends Component {
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
      <ButtonGroup>
        <Button onClick={ ::this.openDialog }>
          Open Fullscreen Dialog
          <DialogExample
              fullscreen={ true }
              isOpen={ this.state.isOpen }
              onRequestClose={ ::this.closeDialog }
              withFooter={ true }
              withTitle={ true } />
        </Button>
      </ButtonGroup>
    );
  }
}
