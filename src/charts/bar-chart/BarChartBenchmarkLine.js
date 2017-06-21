import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class BarChartBenchmarkLine extends Component {
  static propTypes = {
    height: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.string,
  };

  static defaultProps = {
    value: 50,
  };

  render() {
    const { height, value, width } = this.props;
    const style = { height, width };
    const lineStyle = { left: `${value}%` };

    return (
      <div className="ax-bar-chart__benchmark-line" style={ style }>
        <div className="ax-bar-chart__benchmark-line-path" style={ lineStyle } />
      </div>
    );
  }
}
