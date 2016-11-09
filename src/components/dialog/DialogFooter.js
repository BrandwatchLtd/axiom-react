import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

export class DialogFooter extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'ax-dialog__footer');

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(DialogFooter)(addPropTypes());
