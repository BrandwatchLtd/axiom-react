import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartContext from '../ChartContext/ChartContext';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';

export default class RadarPoint extends Component {
  static propTypes = {
    DropdownContext: PropTypes.func,
    TooltipContext: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  render() {
    const {
      colors,
      label,
      onClick,
      onMouseEnter,
      onMouseLeave,
      value,
      x,
      y,
      ...rest
    } = this.props;

    return (
      <div
          className="ax-radar__point"
          onClick={ onClick && (() => onClick({ colors, label, value })) }
          onMouseEnter={ onMouseEnter }
          onMouseLeave={ onMouseLeave }
          style={ { top: `${y}px`, left: `${x}px` } }>
        <ChartContext { ...rest }
            colors={ colors }
            label={ label }
            value={ value }>
          <DataPoints size="0.5rem">
            { colors.map((color) => (
              <DataPoint color={ color } key={ color } />
            )) }
          </DataPoints>
        </ChartContext>
      </div>
    );
  }
}
