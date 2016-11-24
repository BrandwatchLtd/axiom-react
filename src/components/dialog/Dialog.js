import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Modal from '../modal/Modal';

if (__INCLUDE_CSS__) {
  require('./Dialog.scss');
}

export default class Dialog extends Component {
  static propTypes = {
    children: PropTypes.node,
    fullscreen: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'small',
  };

  render() {
    const {
      children,
      className,
      size,
      fullscreen,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-dialog', {
        'ax-dialog--fullscreen': fullscreen,
        [`ax-dialog--${size}`]: !fullscreen && size,
      },
    );

    return (
      <Modal { ...rest }>
        <div className={ classes }>
          { children }
        </div>
      </Modal>
    );
  }
}
