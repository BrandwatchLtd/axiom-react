import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

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
      <em { ...rest }>
        { children }
      </em>
    );
  }
}

export default enhance(Italic)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
