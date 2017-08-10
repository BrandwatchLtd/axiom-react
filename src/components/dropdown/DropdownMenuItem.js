import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ContextMenuItem } from 'bw-axiom';

export default class DropdownMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * Whether the menu is part of a multi-selection menu. When true, this
     * will disable automatically closing the DropdownMenu when clicked.
     */
    multiSelect: PropTypes.bool,
    /** Click handler  */
    onClick: PropTypes.func,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func,
  };

  handleClick(...args) {
    const { closeDropdown } = this.context;
    const { multiSelect, onClick } = this.props;

    if (closeDropdown && !multiSelect) {
      closeDropdown();
    }

    if (onClick) {
      onClick(...args);
    }
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextMenuItem { ...rest } onClick={ this.handleClick.bind(this) }>
        { children }
      </ContextMenuItem>
    );
  }
}
