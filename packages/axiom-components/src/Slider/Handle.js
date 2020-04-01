import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';

export default class Handle extends Component {
  static propTypes = {
    /** Disabled control of the Handle */
    disabled: PropTypes.bool,
    /** Visibility of the Handle */
    isVisible: PropTypes.bool,
    /** Callback for when the mouse is down **/
    onMouseDown: PropTypes.func,
    /** The width and height of the handle **/
    size: PropTypes.number,
    /** Value for the tooltip content */
    value: PropTypes.number,
    /** Value for the Handle position */
    valueAsPercentage: PropTypes.number,
    /** Value formatter for the tooltip */
    valueFormatter: PropTypes.func,
    /** Enables a value indicating tooltip */
    withTooltip: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    isVisible: true,
    onMouseDown: () => {},
    valueFormatter: n => n,
    withTooltip: false,
  };

  render() {
    const {
      disabled,
      onMouseDown,
      isVisible,
      value,
      valueAsPercentage,
      valueFormatter,
      withTooltip,
      size,
    } = this.props;
    const setSize = size ? { width: `${size}px`, height: `${size}px` } : {};

    return (
      <Position enabled={withTooltip} isVisible={isVisible} showArrow>
        <PositionTarget>
          <div
            className="ax-slider__thumb"
            onMouseDown={disabled ? null : onMouseDown}
            style={{ left: `${valueAsPercentage}%`, ...setSize }}
          />
        </PositionTarget>

        <PositionSource>
          <TooltipContext theme="night" width="auto">
            <TooltipContent size="tiny" textStrong>
              {valueFormatter(value)}
            </TooltipContent>
          </TooltipContext>
        </PositionSource>
      </Position>
    );
  }
}
