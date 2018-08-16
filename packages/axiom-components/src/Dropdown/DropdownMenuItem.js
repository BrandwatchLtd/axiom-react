import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import ContextMenuItem from '../Context/ContextMenuItem';

export default class DropdownMenuItem extends Component {
  static propTypes = {
    /** SKIP */
    children: PropTypes.node,
    closeDropdown: PropTypes.func,
    /** Disabled interactions and applies styling */
    disabled: PropTypes.bool,
   /**
    * Whether the menu should stay open after being clicked.
    */
    keepOpen: PropTypes.bool,
     /**
     * Whether the menu is part of a multi-selection menu. When true, this
     * will disable automatically closing the DropdownMenu when clicked.
     */
    multiSelect: PropTypes.bool,
    /** Click handler  */
    onClick: PropTypes.func,
    /** Provides indication that the menu item is selected */
    selected: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { closeDropdown, multiSelect, keepOpen, onClick } = this.props;

    if (closeDropdown && !multiSelect && !keepOpen) closeDropdown();

    if (onClick) onClick(event);
  }

  render() {
    const { children, closeDropdown, ...rest } = this.props;

    return (
      <ContextMenuItem
          { ...omit(rest, ['keepOpen']) }
          onClick={ event => this.handleClick(event) }
          tabIndex="0">
        { children }
      </ContextMenuItem>
    );
  }
}
