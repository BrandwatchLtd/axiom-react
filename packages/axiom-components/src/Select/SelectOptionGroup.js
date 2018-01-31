import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownMenu from '../Dropdown/DropdownMenu';

export default class SelectOptionGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <DropdownMenu { ...rest } >
        { children }
      </DropdownMenu>
    );
  }
}
