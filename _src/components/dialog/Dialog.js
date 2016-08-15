import React, { Component } from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { Card } from '../card/Card';
import { dialogSizes, dialogAnimationDuration } from './_vars';

if (__INCLUDE_CSS__) {
  require('./Dialog.scss');
}

const dialogSizeIds = dialogSizes.map(({ id }) => id);
const dialogSizeDefaultId = dialogSizes.find((size) => size.default).id;

const propTypes = {
  children: { node: true, isRequired: true  },
  fullscreen: { bool: true },
  size: { oneOf: dialogSizeIds, default: dialogSizeDefaultId },
};

export class Dialog extends Component {
  static propTypes = propTypes;

  render() {
    const {
      children,
      className,
      size = propTypes.size.default,
      fullscreen,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-dialog', {
        'ax-dialog--fullscreen': fullscreen,
        [`ax-dialog--${size}`]: size,
      },
    );

    return (
      <Modal { ...rest }
          className={ classes }
          closeTimeoutMS={ parseInt(dialogAnimationDuration, 10) }
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
