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
  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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
      <Context { ...omit(this.props, ['focusOnOpen']) }
          ref={ (el) => this.el = ReactDOM.findDOMNode(el) } />
    );
  }
}
