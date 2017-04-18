import { Component, PropTypes, cloneElement } from 'react';

export default class DropdownTarget extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    openDropdown: PropTypes.func.isRequired,
  };

  handleClick(...args) {
    const { children } = this.props;
    const { openDropdown } = this.context;
    const { onClick = () => {} } = children.props;

    openDropdown();
    onClick(...args);
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onClick: ::this.handleClick,
    });
  }
}
