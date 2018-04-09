import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import ContextMenuItem from '../Context/ContextMenuItem';

export default class DropdownMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
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
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { closeDropdown } = this.context;
    const { multiSelect, keepOpen, onClick } = this.props;

    if (closeDropdown && !multiSelect && !keepOpen) closeDropdown();

    if (onClick) onClick(event);
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextMenuItem
          { ...omit(rest, ['keepOpen']) }
          onClick={ this.handleClick }
          tabIndex="0">
        { children }
      </ContextMenuItem>
    );
  }
}
