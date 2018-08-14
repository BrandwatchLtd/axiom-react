import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import DropdownReactContext from './DropdownReactContext';

export const DropdownTargetRef = 'DropdownTarget';

export default class DropdownTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = DropdownTargetRef;

  constructor(props) {
    super(props);
    this.focusEventHasFired = false;
  }

  handleClick(cb, context, event) {
    const { toggleDropdown } = context;
    if (this.focusEventHasFired) {
      this.focusEventHasFired = false;
    } else {
      toggleDropdown(event);
    }

    if (cb) cb(event);
  }

  handleFocus(cb, context, event) {
    const { openDropdown } = context;
    this.focusEventHasFired = true;
    openDropdown(event);
    if (cb) cb(event);
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <DropdownReactContext.Consumer>
        { context =>
          cloneElement(children, {
            ...rest,
            onClick: this.handleClick.bind(this, children.props.onClick, context),
            onFocus: this.handleFocus.bind(this, children.props.onFocus, context),
          })
        }
      </DropdownReactContext.Consumer>
    );
  }
}
