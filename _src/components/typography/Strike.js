import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

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
      <del { ...rest }>
        { children }
      </del>
    );
  }
}

export default enhance(Strike)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
