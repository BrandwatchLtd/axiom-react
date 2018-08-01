import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Dropdown,
  DropdownSource,
  DropdownTarget,
  Tooltip,
  TooltipSource,
  TooltipTarget,
} from '@brandwatch/axiom-components';

export default class ChartContext extends Component {
  static propTypes = {
    DropdownContext: PropTypes.func,
    TooltipContext: PropTypes.func,
    children: PropTypes.node.isRequired,
    onDropdownClose: PropTypes.func,
    onDropdownOpen: PropTypes.func,
  };

  render() {
    const {
      DropdownContext,
      TooltipContext,
      children,
      onDropdownClose,
      onDropdownOpen,
      ...rest
    } = this.props;

    if (DropdownContext && TooltipContext) {
      return (
        <Dropdown
            onRequestClose={ onDropdownClose }
            onRequestOpen={ onDropdownOpen }
            position="top"
            showArrow
            withMask>
          <DropdownTarget>
            <Tooltip>
              <TooltipTarget>{ children }</TooltipTarget>
              <TooltipSource>
                <TooltipContext { ...rest } />
              </TooltipSource>
            </Tooltip>
          </DropdownTarget>
          <DropdownSource>
            <DropdownContext { ...rest } />
          </DropdownSource>
        </Dropdown>
      );
    }

    if (DropdownContext) {
      return (
        <Dropdown
            onRequestClose={ onDropdownClose }
            onRequestOpen={ onDropdownOpen }
            position="top"
            showArrow
            withMask>
          <DropdownTarget>{ children }</DropdownTarget>
          <DropdownSource>
            <DropdownContext { ...rest } />
          </DropdownSource>
        </Dropdown>
      );
    }

    if (TooltipContext) {
      return (
        <Tooltip>
          <TooltipTarget>{ children }</TooltipTarget>
          <TooltipSource>
            <TooltipContext { ...rest } />
          </TooltipSource>
        </Tooltip>
      );
    }

    return children;
  }
}
