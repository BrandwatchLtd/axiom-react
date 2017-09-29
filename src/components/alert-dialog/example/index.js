import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertDialog from '../AlertDialog';
import AlertDialogBody from '../AlertDialogBody';
import AlertDialogHeader from '../AlertDialogHeader';
import { ExampleConfig } from 'style-guide';

class AlertDialogExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      AlertDialog: PropTypes.object.isRequired,
      AlertDialogBody: PropTypes.object.isRequired,
      AlertDialogHeader: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      AlertDialog: components.AlertDialog,
      AlertDialogBody: components.AlertDialogBody,
      AlertDialogHeader: components.AlertDialogHeader,
    };

    const initialProps = {
      AlertDialog: {
        isOpen: false,
        type: 'info',
        onRequestClose: () => {},
      },
    };

    const initialPropOptions = {
      AlertDialog: {
        onRequestClose: {
          callback: (setProp) => setProp('AlertDialog', 'isOpen', false),
        },
      },
    };

    return (
      <ExampleConfig
          hasVisual={ false }
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <AlertDialog { ...initialProps.AlertDialog }>
          <AlertDialogHeader { ...initialProps.AlertDialogHeader }>
            Lorem ipsum dolor sit amet
          </AlertDialogHeader>

          <AlertDialogBody { ...initialProps.AlertDialogBody }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dignissim sollicitudin quam at lacinia. Quisque a dignissim ipsum.
            Nunc congue, nisi quis venenatis dignissim, nisl quam aliquet sem,
            vel consectetur purus sapien nec libero. Donec ullamcorper dictum
            tellus in mattis. Nunc vel est et felis ornare accumsan.
          </AlertDialogBody>
        </AlertDialog>
      </ExampleConfig>
    );
  }
}


module.exports = [
  AlertDialogExample,
];
