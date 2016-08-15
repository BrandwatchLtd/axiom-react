import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Weak.scss');
}

export class Weak extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-text--weak');

    return (
      <span { ...rest } className={ classes }>
        { children }
      </span>
    );
  }
}

export default enhance(Weak)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
