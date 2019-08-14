import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertBar from '../AlertBar/AlertBar';
import Strong from '../Typography/Strong';

export default class AlertDialogHeader extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Header content inside the AlertDialog, a good place for a title */
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    onRequestClose: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const { onRequestClose, type } = this.context;
    const { children, ...rest } = this.props;

    return (
      <div className="ax-alert-dialog__header">
        <AlertBar { ...rest }
            onRemoveClick={ onRequestClose }
            size="medium"
            type={ type }>
          <Strong>{ children }</Strong>
        </AlertBar>
      </div>
    );
  }
}

