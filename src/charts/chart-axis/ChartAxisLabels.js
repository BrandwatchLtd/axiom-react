import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Small } from 'bw-axiom';
import './ChartAxisLabels.css';

export default class ChartAxisLabels extends Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const { labels, ...rest } = this.props;
    const flexBasis = `${100 / (labels.length - 1)}%`;

    return (
      <Base { ...rest } className="ax-chart-axis-labels">
        { labels.map((x) =>
          <div
              className="ax-chart-axis-labels__label"
              key={ x }
              style={ { flexBasis } }>
            <Small textColor="subtle">{ x }</Small>
          </div>
        ) }
      </Base>
    );
  }
}
