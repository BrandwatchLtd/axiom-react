import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';

export const DropdownTargetRef = 'DropdownTarget';

export default class DropdownTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    openDropdown: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
  };

  static typeRef = DropdownTargetRef;

  static defaultProps = {
    openDropdown: () => {},
    toggleDropdown: () => {},
  };

  constructor(props) {
    super(props);
    this.focusEventHasFired = false;
  }

  handleClick(cb, toggleDropdown, event) {
    if (this.focusEventHasFired) {
      this.focusEventHasFired = false;
    } else {
      toggleDropdown(event);
    }

    if (cb) cb(event);
  }

  handleFocus(cb,openDropdown, event) {
    this.focusEventHasFired = true;
    openDropdown(event);
    if (cb) cb(event);
  }

  render() {
    const {
      children,
      openDropdown,
      toggleDropdown,
      ...rest
    } = this.props;

    return (
      cloneElement(children, {
        rest,
        onClick: this.handleClick.bind(this, children.props.onClick, openDropdown),
        onFocus: this.handleFocus.bind(this, children.props.onFocus, toggleDropdown)
      })
    );
  }
}
