import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class DialogBody extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'ax-dialog__body');

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
