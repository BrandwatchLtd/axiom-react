import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Tbody extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children } = this.props;

    return (
      <tbody { ...this.props }>
        { children }
      </tbody>
    );
  }
}

export default enhance(Tbody)(
  addPropTypes('global'),
  addClassName('global'),
);
