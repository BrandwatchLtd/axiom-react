import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from '@brandwatch/axiom-components';
import './ChartTable.css';

export default class ChartTable extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    xAxisLabels: PropTypes.array,
  };

  render() {
    const { children, xAxisLabels, ...rest } = this.props;
    const classes = classnames('ax-chart-table', {
      'ax-chart-table--responsive': !xAxisLabels || Boolean(xAxisLabels.length % 2),
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
