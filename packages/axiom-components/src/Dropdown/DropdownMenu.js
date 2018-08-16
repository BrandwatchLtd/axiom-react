import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import ContextMenu from '../Context/ContextMenu';

export default class DropdownMenu extends Component {
  static propTypes = {
    /** DropdownMenuItems */
    children: PropTypes.node.isRequired,
    closeDropdown: PropTypes.node.func,
  };

  static defaultProps = {
    closeDropdown: () => {},
  };

  render() {
    const { children, closeDropdown, ...rest } = this.props;

    return (
      <ContextMenu { ...rest }>
        { children.map( child => cloneElement(child, { closeDropdown })) }
      </ContextMenu>
    );
  }
}
