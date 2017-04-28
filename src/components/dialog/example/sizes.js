import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button, Dialog } from 'bw-axiom';
import DialogDemo from './DialogDemo';

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
            <Button key={ size } onClick={ this.openDialog(size).bind(this) }>
              Open { size.toUpperCase() } Dialog
              <DialogDemo
                  isOpen={ this.state[size] }
                  onRequestClose={ this.closeDialog(size).bind(this) }
                  size={ size }
                  withFooter={ true }
                  withTitle={ true } />
            </Button>
          ) }
        </ButtonGroup>

        <Snippet renderSkip={ true }>
          { size.values.map((size) =>
            <Dialog contentLabel={ `Dialog ${size} Size Demo` } key={ size } size={ size }>
              ...
            </Dialog>
          ) }
        </Snippet>
      </Example>
    );
  }
}
