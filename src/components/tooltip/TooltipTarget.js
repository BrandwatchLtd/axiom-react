import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export default class TooltipTarget extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    hideTooltip: PropTypes.func.isRequired,
    showTooltip: PropTypes.func.isRequired,
  };

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

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onMouseMove: this.handleMouseMove.bind(this),
      onMouseLeave: this.handleMouseLeave.bind(this),
    });
  }
}
