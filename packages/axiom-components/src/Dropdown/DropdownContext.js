import PropTypes from 'prop-types';
import React, { useContext, useRef, useEffect } from 'react';
import omit from 'lodash.omit';
import Context from '../Context/Context';
import { contextMenuItemSelector } from '../Context/ContextMenuItem';
import DropdownReactContext from './DropdownReactContext';

if (typeof window !== 'undefined') {
  require('element-closest');
}

const isFocusableMenuItem = element =>
  element && element.hasAttribute(contextMenuItemSelector) && !element.disabled;
export default function DropdownContext(props) {
  const { maxHeight = '30rem', position = 'top', width = '14.5rem' } = props;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { dropdownRef: getDropdownRef, closeDropdown } = useContext(
    DropdownReactContext
  );

  const contextRef = useRef(null);

  function handleClick(event) {
    const dropdownRef = getDropdownRef();

    if (!dropdownRef || !closeDropdown) {
      return;
    }

    if (
      dropdownRef &&
      !dropdownRef.contains(event.target) &&
      !contextRef.current.contains(event.target)
    ) {
      return closeDropdown();
    }
  }

  function getFocusedMenuItem() {
    return contextRef.current.querySelector(`[${contextMenuItemSelector}]:focus`);
  }

  function getMenuItems() {
    return [
      ...contextRef.current.querySelectorAll(
        `[${contextMenuItemSelector}]:not(:disabled)`
      ),
    ];
  }

  function focusMenuItem(element) {
    const menuItem = element.closest(`[${contextMenuItemSelector}]`);

    if (menuItem && isFocusableMenuItem(menuItem)) {
      menuItem.focus();
    }
  }

  function handleMouseMove(event) {
    focusMenuItem(event.target);
  }

  function handleKeyDown(event) {
    switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      return handleDirectionKey('nextElementSibling', 1);
    case 'ArrowUp':
      event.preventDefault();
      return handleDirectionKey('previousElementSibling', -1);
    case 'Tab':
    case 'Escape':
      event.preventDefault();
      return closeDropdown();
    }
  }

  function handleDirectionKey(sibling, delta) {
    const focusedMenuItem = getFocusedMenuItem();
    const siblingElement =
      focusedMenuItem && isFocusableMenuItem(focusedMenuItem[sibling])
        ? focusedMenuItem[sibling]
        : null;

    if (siblingElement) {
      return siblingElement.focus();
    }

    const menuItems = getMenuItems();
    const index = focusedMenuItem && menuItems.indexOf(focusedMenuItem);

    if (focusedMenuItem && menuItems[index + delta]) {
      return menuItems[index + delta].focus();
    } else if (!focusedMenuItem && menuItems.length > 0) {
      menuItems[0].focus();
    }
  }

  return (
    <Context
        maxHeight={ maxHeight }
        position={ position }
        width={ width }
        { ...omit(props, ['focusOnOpen', 'onRequestCloseDropdown']) }
        baseRef={ contextRef }/>
  );
}

DropdownContext.propTypes = {
  /** React reference function for the arrow element */
  arrowRef: PropTypes.func,
  /** Content to be inserted in the contextual area */
  children: PropTypes.node,
  /** Color of the Context */
  color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  /** Maximum height for the content area, exceeding this will make it scrollable */
  maxHeight: PropTypes.string,
  /** Position of the content area relative to the arrow */
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  /** Total width of the component */
  width: PropTypes.string,
};
