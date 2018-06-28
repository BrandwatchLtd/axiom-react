import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import omit from 'lodash.omit';
import Context from '../Context/Context';
import { contextMenuItemSelector } from '../Context/ContextMenuItem';

const isFocusableMenuItem = (element) =>
  element && element.hasAttribute(contextMenuItemSelector) &&
    !element.disabled;

/* eslint-disable react/no-find-dom-node */
export default class DropdownContext extends Component {
  static propTypes = {
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

  static defaultProps = {
    maxHeight: '30rem',
    position: 'top',
    width: '14.5rem',
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    dropdownRef: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('mousedown', this.handleClick);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  handleClick(event) {
    const dropdownRef = this.context.dropdownRef();
    if (!dropdownRef.contains(event.target) && !this.el.contains(event.target)) {
      return this.context.closeDropdown();
    }
  }

  getFocusedMenuItem() {
    return this.el.querySelector(`[${contextMenuItemSelector}]:focus`);
  }

  getMenuItems() {
    return [...this.el.querySelectorAll(`[${contextMenuItemSelector}]:not(:disabled)`)];
  }

  handleKeyDown(event) {
    switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      return this.handleDirectionKey('nextElementSibling', 1);
    case 'ArrowUp':
      event.preventDefault();
      return this.handleDirectionKey('previousElementSibling', -1);
    case 'Tab':
    case 'Escape':
      event.preventDefault();
      return this.context.closeDropdown();
    }
  }

  handleDirectionKey(sibling, delta) {
    const focusedMenuItem = this.getFocusedMenuItem();
    const siblingElement = focusedMenuItem && isFocusableMenuItem(focusedMenuItem[sibling])
      ? focusedMenuItem[sibling]
      : null;


    if (siblingElement) {
      return siblingElement.focus();
    }

    const menuItems = this.getMenuItems();
    const index = focusedMenuItem && menuItems.indexOf(focusedMenuItem);

    if (focusedMenuItem && menuItems[index + delta]) {
      return menuItems[index + delta].focus();
    } else if (!focusedMenuItem && menuItems.length > 0) {
      menuItems[0].focus();
    }
  }

  render() {
    return (
      <Context { ...omit(this.props, ['focusOnOpen', 'onRequestCloseDropdown']) }
          ref={ (el) => this.el = ReactDOM.findDOMNode(el) } />
    );
  }
}
