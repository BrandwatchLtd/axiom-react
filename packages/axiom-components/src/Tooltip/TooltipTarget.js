import PropTypes from "prop-types";
import { Component, cloneElement } from "react";
import omit from "lodash.omit";

export const TooltipTargetRef = "TooltipTarget";
const DELAY_TIMEOUT = 1000;

export default class TooltipTarget extends Component {
  static propTypes = {
    children: PropTypes.node,
    delay: PropTypes.bool,
    /** SKIP */
    hideTooltip: PropTypes.func,
    onClick: PropTypes.func,
    /** SKIP */
    showTooltip: PropTypes.func,
  };

  static typeRef = TooltipTargetRef;

  handleMouseMove(...args) {
    const { children, delay, showTooltip } = this.props;
    const { onMouseMove = () => {} } = children.props;

    if (delay && !this.showTimeout) {
      this.showTimeout = setTimeout(showTooltip, DELAY_TIMEOUT);
    }

    if (!delay) showTooltip();

    onMouseMove(...args);
  }

  handleMouseLeave(...args) {
    const { children, hideTooltip } = this.props;
    const { onMouseLeave = () => {} } = children.props;

    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }

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
      ...omit(rest, ["delay", "hideTooltip", "showTooltip"]),
      onMouseMove: this.handleMouseMove.bind(this),
      onMouseLeave: this.handleMouseLeave.bind(this),
      onClick: this.handleClick.bind(this),
    });
  }
}
