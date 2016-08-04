import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class ListItem extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children } = this.props;

    return (
      <li { ...this.props }>
        { children }
      </li>
    );
  }
}

export default enhance(ListItem)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
