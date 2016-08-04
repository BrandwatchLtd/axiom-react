import React, { Component } from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';
import { Card } from '../Card';
import { breakpointIds, transitionTimeBase } from '../../../sass';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { breakpointClassName } from '../../utils/class-name';

const propTypes = {
  children: { node: true, isRequired: true  },
  fullscreen: { bool: true },
  size: { oneOf: [...breakpointIds], default: 'sm' },
};

export class Dialog extends Component {
  static propTypes = propTypes;

  render() {
    const {
      children,
      className,
      size = propTypes.size.default,
      fullscreen,
    } = this.props;

    const classes = classnames(className,
      'ax-dialog', {
        'ax-dialog--fullscreen': fullscreen,
      },
      breakpointClassName(size, ({ id }) => `ax-dialog--${id}`),
    );

    return (
      <Modal { ...this.props }
          className={ classes }
          closeTimeoutMS={ parseInt(transitionTimeBase, 10) }
          overlayClassName="ax-dialog__overlay">
        <Card className="ax-dialog__card">
          { children }
        </Card>
      </Modal>
    );
  }
}

export default enhance(Dialog)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
