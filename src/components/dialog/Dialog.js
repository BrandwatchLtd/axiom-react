import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Modal } from 'bw-axiom';
import './Dialog.css';

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
      size,
      fullscreen,
      ...rest
    } = this.props;

    const classes = classnames('ax-dialog', {
      'ax-dialog--fullscreen': fullscreen,
      [`ax-dialog--${size}`]: !fullscreen && size,
    });

    return (
      <Modal { ...rest }>
        <Base className={ classes } theme="light">
          { children }
        </Base>
      </Modal>
    );
  }
}
