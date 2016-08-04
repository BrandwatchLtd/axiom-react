import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Italic extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children } = this.props;

    return (
      <em { ...this.props }>
        { children }
      </em>
    );
  }
}

export default enhance(Italic)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
