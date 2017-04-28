import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ContextMenuItem } from 'bw-axiom';

export default class DropdownMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func,
  };

  handleClick(...args) {
    const { closeDropdown } = this.context;
    const { onClick } = this.props;

    if (closeDropdown) {
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
