import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './ColumnChartXAxis.css';

export default class ColumnChartXAxis extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    yAxisWidth: PropTypes.string.isRequired,
  };

  render() {
    const { yAxisWidth } = this.context;
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest }
          className="ax-column-chart__x-axis"
          style={ { paddingLeft: yAxisWidth } }>
        { children }
      </Base>
    );
  }
}
