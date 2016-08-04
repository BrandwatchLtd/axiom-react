import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Thead extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children } = this.props;

    return (
      <thead { ...this.props }>
        { children }
      </thead>
    );
  }
}

export default enhance(Thead)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
