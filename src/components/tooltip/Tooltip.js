import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Position,
  PositionTarget,
  PositionContent,
  TooltipContent,
  TooltipTarget,
  findComponent,
} from 'bw-axiom';

export default class Tooltip extends Component {
  static propTypes = {
    /**
     * Children inside Tooltip should contain all of and
     * only TooltipTarget and TooltipContent!
     */
    children: PropTypes.node,
    /**
     * Controls the starting position around TooltipTarget in which the
     * TooltipContent will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.string,
  };

  static childContextTypes = {
    hideTooltip: PropTypes.func.isRequired,
    showTooltip: PropTypes.func.isRequired,
  };

  static defaultProps = {
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
    const { isVisible } = this.state;

    if (!isVisible) {
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
