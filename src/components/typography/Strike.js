import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Strike.scss');
}

export class Strike extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="del">
        { children }
      </Base>
    );
  }
}

export default enhance(Strike)(addPropTypes());
