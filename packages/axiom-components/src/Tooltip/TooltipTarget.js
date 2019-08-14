import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';
import omit from 'lodash.omit';

export const TooltipTargetRef = 'TooltipTarget';
const DELAY_TIMEOUT = 1000;

export default class TooltipTarget extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    delay: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    hideTooltip: PropTypes.func.isRequired,
    showTooltip: PropTypes.func.isRequired,
  };

  static typeRef = TooltipTargetRef;

  handleMouseMove(...args) {
    const { children, delay } = this.props;
    const { showTooltip } = this.context;
    const { onMouseMove = () => {} } = children.props;

    if (delay && !this.showTimeout) {
      this.showTimeout = setTimeout(showTooltip, DELAY_TIMEOUT);
    }

    if (!delay) showTooltip();

    onMouseMove(...args);
  }

  handleMouseLeave(...args) {
    const { children } = this.props;
    const { hideTooltip } = this.context;
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
      ...omit(rest, ['delay']),
      onMouseMove: this.handleMouseMove.bind(this),
      onMouseLeave: this.handleMouseLeave.bind(this),
      onClick: this.handleClick.bind(this),
    });
  }
}
