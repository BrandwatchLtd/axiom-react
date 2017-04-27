import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './ChartGrid.css';

export default class ChartGrid extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  };

  render() {
    const { count, ...rest } = this.props;
    const increments = Array.apply(null, { length: count }).map((_, i) => i * 10);

    return (
      <Base { ...rest } className="ax-chart-grid">
        <div className="ax-chart-grid__lines">
          <svg className="ax-chart-grid__lines-svg">
            { increments.map((x) =>
              <svg
                  className="ax-chart-grid__line-svg"
                  key={ x }
                  preserveAspectRatio="none"
                  viewBox="0 0 1 1"
                  width="1"
                  x={ `${x}%` }>
                <path
                    className="ax-chart-grid__line"
                    d="M 0 0 V 1"
                    shapeRendering="crispEdges"
                    strokeDasharray="1, 1"
                    strokeWidth="1" />
              </svg>
            ) }
          </svg>
        </div>
      </Base>
    );
  }
}
