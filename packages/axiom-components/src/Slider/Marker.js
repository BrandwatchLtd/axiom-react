import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';

export default class Marker extends Component {
  static propTypes = {
    /** Disabled control of the marker */
    disabled: PropTypes.bool,
    /** Visibility of the marker */
    isVisible: PropTypes.bool,
    /** Callback for when the mouse is down **/
    onMouseDown: PropTypes.func,
    /** Value for the tooltip content */
    value: PropTypes.number,
    /** Value for the marker position */
    valueAsPercentage: PropTypes.number,
    /** Value formatter for the tooltip */
    valueFormatter: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    isVisible: true,
    onMouseDown: () => {},
    valueFormatter: (n) => n,
  };

  render() {

    const { disabled, onMouseDown, isVisible, value, valueAsPercentage, valueFormatter } = this.props;
    return (
      <Position
          isVisible={ isVisible }
          showArrow>
        <PositionTarget>
          <div
              className="ax-slider__thumb"
              onMouseDown={ disabled ? null : onMouseDown }
              style={ { left: `${valueAsPercentage}%` } }/>
        </PositionTarget>

        <PositionSource>
          <TooltipContext theme="night" width="auto">
            <TooltipContent size="tiny" textStrong>
              { valueFormatter(value) }
            </TooltipContent>
          </TooltipContext>
        </PositionSource>
      </Position>
    );
  }
}
