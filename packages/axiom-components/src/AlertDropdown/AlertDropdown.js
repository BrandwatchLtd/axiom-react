import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AlertDropdownTargetRef } from './AlertDropdownTarget';
import { AlertDropdownSourceRef } from './AlertDropdownSource';
import { findComponent } from '@brandwatch/axiom-utils';
import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';

import './AlertDropdown.css';

class AlertDropdown extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /**
     * Children inside AlertDropdown should contain all of and
     * only AlertDropdownTarget and AlertDropdownSource
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds control to enable or disable showing the AlertDropdownSource
     */
    enabled: PropTypes.bool,
    /**
     * Invoked when the Dropdown is closed.
     */
    onRequestClose: PropTypes.func,
    /**
     * Invoked when the Dropdown is opened.
     * */
    onRequestOpen: PropTypes.func,
    /**
     * Type of AlertDropdown that affects the coloring and icon
     * */
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    /**
     * Configuration to apply a mask behind the Dropdown content while
     * open. Good for disabling interactions with other things on the page.
     */
    withMask: PropTypes.bool,
  };

  static childContextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    openDropdown: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    enabled: true,
    type: 'info',
  };

  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  getChildContext() {
    return {
      closeDropdown: () => this.close(),
      openDropdown: () => this.open(),
      type: this.props.type,
    };
  }

  open() {
    const { enabled, onRequestOpen } = this.props;

    if (enabled) {
      this.setState({ isVisible: true });
    }

    if (onRequestOpen) onRequestOpen();
  }

  close() {
    const { onRequestClose } = this.props;

    this.setState({ isVisible: false });

    if (onRequestClose) onRequestClose();
  }

  render() {
    const { children, withMask, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Position
          { ...rest }
          isVisible={ isVisible }
          onMaskClick={ withMask ? () => this.close() : null }
          position="bottom">
        <PositionTarget>
          { findComponent(children, AlertDropdownTargetRef) }
        </PositionTarget>
        <PositionSource>{ findComponent(children, AlertDropdownSourceRef) }</PositionSource>
      </Position>
    );
  }
}

export default AlertDropdown;
