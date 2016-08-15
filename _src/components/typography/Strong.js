import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Strong.scss');
}

export class Strong extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <strong { ...rest }>
        { children }
      </strong>
    );
  }
}

export default enhance(Strong)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
