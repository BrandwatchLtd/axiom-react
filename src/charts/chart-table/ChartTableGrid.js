import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, ChartGrid } from 'bw-axiom';
import './ChartTableGrid.css';

export default class ChartTableGrid extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    count: PropTypes.number,
  };

  static defaultProps = {
    count: 11,
  };

  static contextTypes = {
    labelColumnWidth: PropTypes.string.isRequired,
  };

  render() {
    const { labelColumnWidth } = this.context;
    const { children, count, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart-table__grid-container">
        { children }

        <div
            className="ax-chart-table__grid"
            style={ { left: labelColumnWidth } }>
          <ChartGrid count={ count } />
        </div>
      </Base>
    );
  }
}
