import { Component, PropTypes, cloneElement } from 'react';

export default class TooltipTarget extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    hideTooltip: PropTypes.func.isRequired,
    showTooltip: PropTypes.func.isRequired,
  };

  handleMouseEnter(...args) {
    const { children } = this.props;
    const { showTooltip } = this.context;
    const { onMouseEnter = () => {} } = children.props;

    showTooltip();
    onMouseEnter(...args);
  }

  handleMouseLeave(...args) {
    const { children } = this.props;
    const { hideTooltip } = this.context;
    const { onMouseLeave =() => {} } = children.props;

    hideTooltip();
    onMouseLeave(...args);
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onMouseEnter: ::this.handleMouseEnter,
      onMouseLeave: ::this.handleMouseLeave,
    });
  }
}
