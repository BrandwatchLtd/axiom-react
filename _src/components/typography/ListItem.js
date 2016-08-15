import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class ListItem extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <li { ...rest }>
        { children }
      </li>
    );
  }
}

export default enhance(ListItem)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
