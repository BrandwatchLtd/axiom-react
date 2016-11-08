import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Strong.scss');
}

export class Strong extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'ax-text--strong');

    return (
      <strong { ...rest } className={ classes }>
        { children }
      </strong>
    );
  }
}

export default enhance(Strong)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
