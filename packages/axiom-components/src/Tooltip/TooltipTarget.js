import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const TooltipTargetRef = 'TooltipTarget';

export default class TooltipTarget extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    hideTooltip: PropTypes.func.isRequired,
    showTooltip: PropTypes.func.isRequired,
  };

  static typeRef = TooltipTargetRef;

  handleMouseMove(...args) {
    const { children } = this.props;
    const { showTooltip } = this.context;
    const { onMouseMove = () => {} } = children.props;

    showTooltip();
    onMouseMove(...args);
  }

  handleMouseLeave(...args) {
    const { children } = this.props;
    const { hideTooltip } = this.context;
    const { onMouseLeave = () => {} } = children.props;

    hideTooltip();
    onMouseLeave(...args);
  }

  handleClick(...args) {
    const childClick = this.props.children.props.onClick;
    const { onClick } = this.props;

    if (childClick) {
      childClick(...args);
    }

    if (onClick) {
      onClick(...args);
    }
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onMouseMove: this.handleMouseMove.bind(this),
      onMouseLeave: this.handleMouseLeave.bind(this),
      onClick: this.handleClick.bind(this),
    });
  }
}
