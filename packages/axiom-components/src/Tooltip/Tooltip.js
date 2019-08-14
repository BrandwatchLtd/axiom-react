import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findComponent } from '@brandwatch/axiom-utils';
import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import { TooltipSourceRef } from './TooltipSource';
import { TooltipTargetRef } from './TooltipTarget';

export default class Tooltip extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /**
     * Children inside Tooltip should contain all of and
     * only TooltipTarget and TooltipSource!
     */
    children: PropTypes.node,
    /**
     * Adds delay to the opening of the tooltip
     */
    delay: PropTypes.bool,
    /**
     * Adds control to enable or disable showing the TooltipSource
     */
    enabled: PropTypes.bool,
    /** SKIP */
    onClick: PropTypes.func,
    /**
     * Controls the starting position around TooltipTarget in which the
     * TooltipSource will attempt to be placed. If that position is not available
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
    delay: false,
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
    const { children, delay, onClick, position, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Position { ...rest } isVisible={ isVisible } position={ position } showArrow >
        <PositionTarget delay={ delay } onClick={ onClick }>
          { findComponent(children, TooltipTargetRef) }
        </PositionTarget>
        <PositionSource>{ findComponent(children, TooltipSourceRef) }</PositionSource>
      </Position>
    );
  }
}
