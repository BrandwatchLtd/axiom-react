import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';

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
    const increments = Array.apply(null, { length: count }).map((_, i) => i * (100 / (count - 1)));

    return (
      <Base { ...rest } className="ax-chart-table__grid-container">
        <div
            className="ax-chart-table__grid"
            style={ { left: labelColumnWidth } }>
          <div className="ax-chart-table__grid-lines">
            { increments.map((x) =>
              <div
                  className="ax-chart-table__grid-line"
                  key={ x }
                  style={ { left: `${x}%` } } />
            ) }
          </div>
        </div>
        { children }
      </Base>
    );
  }
}
