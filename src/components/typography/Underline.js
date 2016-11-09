import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Underline.scss');
}

export class Underline extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="u">
        { children }
      </Base>
    );
  }
}

export default enhance(Underline)(addPropTypes());
