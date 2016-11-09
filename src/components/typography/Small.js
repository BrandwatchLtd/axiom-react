import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Small.scss');
}

export class Small extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames('ax-small', className);

    return (
      <Base { ...rest } Component="small" className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(Small)(addPropTypes());
