import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class BarChartBenchmarkLine extends Component {
  static propTypes = {
    faded: PropTypes.bool,
    height: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.string,
  };

  static defaultProps = {
    value: 50,
  };

  render() {
    const { faded, height, value, width } = this.props;
    const style = { height, width };
    const lineStyle = { left: `${value}%` };

    const classes = classnames('ax-bar-chart__benchmark-line', {
      'ax-bar-chart__benchmark-line--faded': faded,
    });

    return (
      <div className={ classes } style={ style }>
        <div className="ax-bar-chart__benchmark-line-path" style={ lineStyle } />
      </div>
    );
  }
}
