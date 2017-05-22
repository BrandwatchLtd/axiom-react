import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DataPoints, DataPoint } from 'bw-axiom';
import DotPlotLine from './DotPlotLine';
import './DotPlot.css';

export default class DotPlot extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.oneOf([
        'rose',
        'pink',
        'purple',
        'lilac',
        'blue',
        'teal',
        'green',
        'chartreuse',
        'amber',
        'orange',
        'brown',
        'grey',
      ]).isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
  };

  render() {
    const { data } = this.props;
    const diameter = 0.8125;
    const height = `${diameter}rem`;
    const xValues = data.map(({ value }) => value);
    const x = Math.min(...xValues);
    const range = Math.max(...xValues) - x;
    const style = {
      height,
      marginLeft: `-${diameter / 2}rem`,
    };

    // [{color: String, value: Number}] -> [{colors: [String], value: Number}]
    const stackedData = data.reduce((acc, val) => {
      for (const data of acc) {
        if (data.value === val.value) {
          data.colors.push(val.color);
          return acc;
        }
      }
      acc.push({ value: val.value, colors: [val.color] });
      return acc;
    }, []);

    return (
      <svg
          className="ax-dot-plot"
          style={ style }>
        <DotPlotLine width={ `${ range }%` } x={ `${ x }%` } />
        { stackedData.map(({ value, colors }, i) => (
          <DataPoints
              key={ i }
              preserveAspectRatio="xMinYMin meet"
              size={ height }
              x={ `${value}%` } >
            {colors.map((color, index) => <DataPoint color={ color } key={ index } />)}
          </DataPoints>
        )) }
      </svg>
    );
  }
}
