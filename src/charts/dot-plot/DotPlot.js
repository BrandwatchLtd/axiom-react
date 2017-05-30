import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import DotPlotContext from './DotPlotContext';
import DotPlotLine from './DotPlotLine';
import './DotPlot.css';

export const DOT_PLOT_DIAMETER = 0.8125;

export default class DotPlot extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
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
    label: PropTypes.string,
  };

  render() {
    const { ContextComponent, data, label, ...rest } = this.props;
    const xValues = data.map(({ value }) => value);
    const x = Math.min(...xValues);
    const range = Math.max(...xValues) - x;
    const style = {
      height: `${DOT_PLOT_DIAMETER}rem`,
      marginLeft: `-${DOT_PLOT_DIAMETER / 2}rem`,
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
      <Base { ...rest }
          Component="svg"
          className="ax-dot-plot"
          style={ style }>
        <DotPlotLine width={ `${ range }%` } x={ `${ x }%` } />
        { stackedData.map(({ value, colors }) =>
          <DotPlotContext
              ContextComponent={ ContextComponent }
              colors={ colors }
              data={ data }
              key={ value }
              label={ label }
              value={ value } />
        )  }
      </Base>
    );
  }
}
