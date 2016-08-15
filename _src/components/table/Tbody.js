import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Tbody extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <tbody { ...rest }>
        { children }
      </tbody>
    );
  }
}

export default enhance(Tbody)(
  addPropTypes('global'),
  addClassName('global'),
);
