import React, { Component, PropTypes } from 'react';
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
    children: PropTypes.node,
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
      hideTooltip: ::this.hide,
      showTooltip: ::this.show,
    };
  }

  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  show() {
    this.setState({ isVisible: true });
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
