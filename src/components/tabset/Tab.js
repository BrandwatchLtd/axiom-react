import React, { Component, PropTypes } from 'react';
import MenuItem from '../menu/MenuItem';

export default class Tab extends Component {
  static propTypes = {
    title: PropTypes.node,
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
