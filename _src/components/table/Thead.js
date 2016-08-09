import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Thead extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <thead { ...rest }>
        { children }
      </thead>
    );
  }
}

export default enhance(Thead)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
