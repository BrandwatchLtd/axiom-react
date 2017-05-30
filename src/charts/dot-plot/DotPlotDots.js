import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DataPoints, DataPoint } from 'bw-axiom';
import { DOT_PLOT_DIAMETER } from './DotPlot';

export default class DotPlotDots extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { colors, value, ...rest } = this.props;

    return (
      <DataPoints { ...rest }
          size={ `${DOT_PLOT_DIAMETER}rem` }
          x={ `${value}%` }>
        { colors.map((color, index) =>
          <DataPoint color={ color } key={ index } />
        ) }
      </DataPoints>
    );
  }
}
