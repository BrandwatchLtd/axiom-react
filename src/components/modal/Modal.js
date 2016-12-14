import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';
import { getCSSVar } from '../../utils';

if (__INCLUDE_CSS__) {
  require('./Modal.scss');
}

export default class Modal extends Component {
  static propTypes = {
    overlayClassName: PropTypes.string,
    withOverlay: PropTypes.bool,
  };

  static defaultProps = {
    withOverlay: true,
  };

  render() {
    const {
      overlayClassName,
      withOverlay,
      ...rest
    } = this.props;

    return (
      <ReactModal
          { ...rest }
          className="ax-modal"
          closeTimeoutMS={ parseInt(getCSSVar('modal-animation-duration'), 10) }
          overlayClassName={ withOverlay && (overlayClassName || 'ax-modal__overlay') } />
    );
  }
}
