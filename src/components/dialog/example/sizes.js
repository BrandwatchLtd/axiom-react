import React, { Component, PropTypes } from 'react';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import Dialog from '../Dialog';
import DialogDemo from './DialogDemo';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class DialogSizes extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Dialog: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { components } = this.props;
    const { Dialog: { size } } = components;

    size.values.forEach((size) => {
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
    const { components } = this.props;
    const { Dialog: { size } } = components;

    return (
      <Example name="Sized Dialogs">
        <ButtonGroup>
          { size.values.map((size) =>
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
          { size.values.map((size) =>
            <Dialog key={ size } renderSkip={ true } size={ size }>...</Dialog>
          ) }
        </Snippet>
      </Example>
    );
  }
}
