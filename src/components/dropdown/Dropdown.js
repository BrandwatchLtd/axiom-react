import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownContent from './DropdownContent';
import DropdownTarget from './DropdownTarget';
import Position from '../position/Position';
import PositionContent from '../position/PositionContent';
import PositionTarget from '../position/PositionTarget';
import findComponent from '../../utils/findComponent';

export default class Dropdown extends Component {
  static propTypes = {
    /**
     * Children inside Dropdown should contain all of and
     * only DropdownTarget and DropdownContent!
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds control to enable or disable showing the DropdownContent
     */
    enabled: PropTypes.bool,
    /**
     * Controls the starting position around DropdownTarget in which the
     * DropdownContent will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow: PropTypes.bool,
  };

  static childContextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    openDropdown: PropTypes.func.isRequired,
  };

  static defaultProps = {
    enabled: true,
    position: 'bottom',
    showArrow: true,
  };

  getChildContext() {
    return {
      closeDropdown: () => this.close(),
      openDropdown: () => this.open(),
    };
  }

  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  open() {
    const { enabled } = this.props;

    if (enabled) {
      this.setState({ isVisible: true });
    }
  }

  close() {
    this.setState({ isVisible: false });
  }

  render() {
    const { children, position, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Position
          { ...rest }
          isVisible={ isVisible }
          onMaskClick={ () => this.close() }
          position={ position }>
        <PositionTarget>{ findComponent(children, DropdownTarget) }</PositionTarget>
        <PositionContent>{ findComponent(children, DropdownContent) }</PositionContent>
      </Position>
    );
  }
}
