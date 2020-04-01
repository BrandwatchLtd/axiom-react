import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import ChartContext from '../ChartContext/ChartContext';

export default class BarChartBenchmarkLine extends Component {
  static propTypes = {
    BenchmarkTooltipContext: PropTypes.func,
    benchmark: PropTypes.number,
    data: PropTypes.object,
    faded: PropTypes.bool,
    height: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.string,
  };

  static defaultProps = {
    value: 50,
  };

  render() {
    const {
      BenchmarkTooltipContext,
      benchmark,
      data,
      faded,
      height,
      label,
      value,
      width,
    } = this.props;
    const style = { height, width };
    const lineStyle = { left: `${value}%` };

    const classes = classnames('ax-bar-chart__benchmark-line', {
      'ax-bar-chart__benchmark-line--faded': faded,
    });

    const pathClasses = classnames('ax-bar-chart__benchmark-line-path', {
      'ax-bar-chart__benchmark-line-path--interactive': BenchmarkTooltipContext,
    });

    return (
      <div className={classes} style={style}>
        <ChartContext
          TooltipContext={BenchmarkTooltipContext}
          data={data}
          label={label}
          value={benchmark}
        >
          <div className={pathClasses} style={lineStyle} />
        </ChartContext>
      </div>
    );
  }
}
