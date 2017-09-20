import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Position from '../position/Position';
import PositionContent from '../position/PositionContent';
import PositionTarget from '../position/PositionTarget';
import TooltipContent from './TooltipContent';
import TooltipTarget from './TooltipTarget';
import findComponent from '../../utils/findComponent';

export default class Tooltip extends Component {
  static propTypes = {
    /**
     * Children inside Tooltip should contain all of and
     * only TooltipTarget and TooltipContent!
     */
    children: PropTypes.node,
    /**
     * Adds control to enable or disable showing the TooltipContent
     */
    enabled: PropTypes.bool,
    /**
     * Controls the starting position around TooltipTarget in which the
     * TooltipContent will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  };

  static childContextTypes = {
    hideTooltip: PropTypes.func.isRequired,
    showTooltip: PropTypes.func.isRequired,
  };

  static defaultProps = {
    enabled: true,
    position: 'top',
  };

  getChildContext() {
    return {
      hideTooltip: () => this.hide(),
      showTooltip: () => this.show(),
    };
  }

  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  show() {
    const { enabled } = this.props;
    const { isVisible } = this.state;

    if (enabled && !isVisible) {
      this.setState({ isVisible: true });
    }
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    const { children, position, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Position { ...rest } isVisible={ isVisible } position={ position }>
        <PositionTarget>{ findComponent(children, TooltipTarget) }</PositionTarget>
        <PositionContent>{ findComponent(children, TooltipContent) }</PositionContent>
      </Position>
    );
  }
}
