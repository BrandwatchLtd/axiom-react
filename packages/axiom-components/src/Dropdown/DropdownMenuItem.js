import PropTypes from 'prop-types';
import React from 'react';
import omit from 'lodash.omit';
import ContextMenuItem from '../Context/ContextMenuItem';
import DropdownReactContext from './DropdownReactContext';

export default function DropdownMenuItem(props) {
  const { closeDropdown } = React.useContext(DropdownReactContext);
  function handleClick(event) {
    const { multiSelect, keepOpen, onClick } = props;

    if (closeDropdown && !multiSelect && !keepOpen) closeDropdown();

    if (onClick) onClick(event);
  }

  const { children, ...rest } = props;

  return (
    <ContextMenuItem
        { ...omit(rest, ['keepOpen']) }
        onClick={ handleClick }
        tabIndex="0">
      { children }
    </ContextMenuItem>
  );
}

DropdownMenuItem.propTypes = {
  /** SKIP */
  children: PropTypes.node,
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
  /**  Vertical padding size applied to the menu item */
  paddingVertical: PropTypes.oneOf(['small', 'medium']),
  /** Provides indication that the menu item is selected */
  selected: PropTypes.bool,
};
