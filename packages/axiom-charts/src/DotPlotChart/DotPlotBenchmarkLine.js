import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

export default class DotPlotBenchmarkLine extends Component {
  static propTypes = {
    faded: PropTypes.bool,
    height: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.string,
  };

  static defaultProps = {
    width: 'auto',
    value: 50,
  };

  render() {
    const { faded, height, value, width, ...rest } = this.props;
    const style = { height, width };
    const lineStyle = { left: `${value}%` };
    const classes = classnames('ax-dot-plot__benchmark-line', {
      'ax-dot-plot__benchmark-line--faded': faded,
    });

    return (
      <div {...rest} className={classes} style={style}>
        <div className="ax-dot-plot__benchmark-line-path" style={lineStyle} />
      </div>
    );
  }
}
