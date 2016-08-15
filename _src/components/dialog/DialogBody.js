import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class DialogBody extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'ax-dialog__body');

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(DialogBody)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
