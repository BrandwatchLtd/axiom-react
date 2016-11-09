import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { enhance, addPropTypes } from '../_utils/components';
import { modalAnimationDuration } from './_vars';

if (__INCLUDE_CSS__) {
  require('./Modal.scss');
}

const propTypes = {
  overlayClassName: { string: true },
  withOverlay: { bool: true, default: true },
};

export class Modal extends Component {
  static propTypes = propTypes;

  render() {
    const {
      overlayClassName,
      withOverlay = propTypes.withOverlay.default,
      ...rest
    } = this.props;

    return (
      <ReactModal
          { ...rest }
          className="ax-modal"
          closeTimeoutMS={ parseInt(modalAnimationDuration, 10) }
          overlayClassName={ withOverlay && (overlayClassName || 'ax-modal__overlay') } />
    );
  }
}

export default enhance(Modal)(addPropTypes());
