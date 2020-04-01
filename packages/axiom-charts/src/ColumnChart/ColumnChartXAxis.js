import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';

export default class ColumnChartXAxis extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    labelColumnWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, labelColumnWidth, ...rest } = this.props;

    return (
      <Base
        {...rest}
        className="ax-column-chart__x-axis"
        style={{ paddingLeft: labelColumnWidth }}
      >
        {children}
      </Base>
    );
  }
}
