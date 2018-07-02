import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Modal from '../Modal/Modal';
import './AlertDialog.css';

export default class AlertDialog extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Visibility toggle for the AlertDialog */
    isOpen: PropTypes.bool.isRequired,
    /** Callback for closing the AlertDialog by clicking on the overlay */
    onRequestClose: PropTypes.func.isRequired,
    /** Toggle if the AlertDialog should be closed by pressing Esc */
    shouldCloseOnEsc: PropTypes.bool,
    /** Alert type */
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
  };

  static childContextTypes = {
    onRequestClose: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: 'info',
  };

  getChildContext() {
    return {
      onRequestClose: this.props.onRequestClose,
      type: this.props.type,
    };
  }

  render() {
    const { children, onRequestClose, ...rest } = this.props;

    return (
      <Modal { ...rest }
          onOverlayClick={ onRequestClose }
          overlayShade={ null }>
        <Base className="ax-alert-dialog">
          { children }
        </Base>
      </Modal>
    );
  }
}
