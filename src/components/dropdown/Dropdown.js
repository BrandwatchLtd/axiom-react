import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  DropdownTarget,
  DropdownContent,
  Position,
  PositionTarget,
  PositionContent,
  findComponent,
} from 'bw-axiom';

export default class Dropdown extends Component {
  static propTypes = {
    /**
     * Children inside Dropdown should contain all of and
     * only DropdownTarget and DropdownContent!
     */
    children: PropTypes.node.isRequired,
    /**
     * Controls the starting position around DropdownTarget in which the
     * DropdownContent will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  };

  static childContextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    openDropdown: PropTypes.func.isRequired,
  };

  static defaultProps = {
    position: 'bottom',
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
    this.setState({ isVisible: true });
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
