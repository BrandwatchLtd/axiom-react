import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Italic.scss');
}

export class Italic extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base Component="em" { ...rest }>
        { children }
      </Base>
    );
  }
}

export default enhance(Italic)(addPropTypes());
