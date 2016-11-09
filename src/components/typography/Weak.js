import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

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
      <Base { ...rest } Component="span" className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(Weak)(addPropTypes());
