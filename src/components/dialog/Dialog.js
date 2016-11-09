import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Modal from '../modal/Modal';
import { dialogSizes } from './_vars';

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

export default enhance(Dialog)(addPropTypes());
