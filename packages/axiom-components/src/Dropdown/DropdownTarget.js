import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const DropdownTargetRef = 'DropdownTarget';

export default class DropdownTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    openDropdown: PropTypes.func.isRequired,
  };

  static typeRef = DropdownTargetRef;

  handleOpen(cb, ...args) {
    const { openDropdown } = this.context;
    openDropdown();
    if (cb) cb(...args);
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onClick: this.handleOpen.bind(this, children.props.onClick),
      onFocus: this.handleOpen.bind(this, children.props.onFocus),
    });
  }
}
