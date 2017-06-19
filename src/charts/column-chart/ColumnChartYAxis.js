import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './ColumnChartYAxis.css';

export default class ColumnChartYAxis extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['top', 'bottom']),
    children: PropTypes.node.isRequired,
    yAxisWidth: PropTypes.string.isRequired,
  };

  static defaultProps = {
    align: 'bottom',
  };

  render() {
    const { align, children, yAxisWidth, ...rest } = this.props;
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
