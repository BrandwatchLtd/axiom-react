import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './ColumnChartYAxis.css';

export default class ColumnChartYAxis extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['top', 'bottom']),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    align: 'bottom',
  };

  static contextTypes = {
    yAxisWidth: PropTypes.string.isRequired,
  };

  render() {
    const { align, children, ...rest } = this.props;
    const { yAxisWidth } = this.context;
    const classes = classnames('ax-column-chart__y-axis',
      `ax-column-chart__y-axis--${align}`);

    return (
      <Base { ...rest }
          className={ classes }
          style={ { flexBasis: yAxisWidth } }>
        <div className="ax-column-chart__y-axis-content">
          { children }
        </div>
      </Base>
    );
  }
}
