import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

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
      <Base { ...rest } Component="strong" className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(Strong)(addPropTypes());
