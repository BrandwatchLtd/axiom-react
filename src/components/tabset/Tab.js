import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import MenuItem from '../menu/MenuItem';

export class Tab extends Component {
  static propTypes = {
    title: { node: true },
  };

  render() {
    const { title, ...rest } = this.props;

    return (
      <MenuItem { ...rest }>
        { title }
      </MenuItem>
    );
  }
}

export default enhance(Tab)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
