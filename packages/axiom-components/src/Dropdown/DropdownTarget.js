import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const DropdownTargetRef = 'DropdownTarget';

export default class DropdownTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    openDropdown: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
  };

  static typeRef = DropdownTargetRef;

  constructor(props) {
    super(props);
    this.focusEventHasFired = false;
  }

  handleClick(cb, event) {
    const { toggleDropdown } = this.context;

    if (this.focusEventHasFired) {
      this.focusEventHasFired = false;
    } else {
      toggleDropdown(event);
    }

    if (cb) cb(event);
  }

  handleFocus(cb, event) {
    const { openDropdown } = this.context;
    this.focusEventHasFired = true;
    openDropdown(event);
    if (cb) cb(event);
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onClick: this.handleClick.bind(this, children.props.onClick),
      onFocus: this.handleFocus.bind(this, children.props.onFocus),
    });
  }
}
