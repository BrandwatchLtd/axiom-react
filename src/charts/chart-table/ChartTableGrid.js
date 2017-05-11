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
        { children }

        <div
            className="ax-chart-table__grid"
            style={ { left: labelColumnWidth } }>
          <div className="ax-chart-table__grid-lines">
            <svg className="ax-chart-table__grid-lines-svg">
              { increments.map((x) =>
                <svg
                    className="ax-chart-table__grid-line-svg"
                    key={ x }
                    preserveAspectRatio="none"
                    viewBox="0 0 1 1"
                    width="1"
                    x={ `${x}%` }>
                  <path
                      className="ax-chart-table__grid-line"
                      d="M 0 0 V 1"
                      shapeRendering="crispEdges"
                      strokeDasharray="1, 1"
                      strokeWidth="1" />
                </svg>
              ) }
            </svg>
          </div>
        </div>
      </Base>
    );
  }
}
