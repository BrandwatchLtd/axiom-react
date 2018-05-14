import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import { Bar } from '@brandwatch/axiom-charts';
import './CombinedBar.css';

export default class CombinedBar extends Component {
  static propTypes = {
    benchmarkValue: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  };

  render() {
    const { percent, benchmarkValue, ...rest } = this.props;
    const isStretched = benchmarkValue > percent;

    const stripedBarWidth = isStretched ? benchmarkValue - percent : percent - benchmarkValue;
    const stripedBarStyle = {
      left: isStretched ? `${percent}%` : `${benchmarkValue}%`,
    };

    const stripedBarProps = omit(rest, [
      'onClick',
    ]);

    return (
      <React.Fragment>
        <Bar
            percent={ percent }
            { ...rest } />

        { isStretched && (<div className="ax-bar-chart__combined-bar_diff" style={ stripedBarStyle }>
          <Bar
              fillMode="striped"
              percent={ stripedBarWidth }
              { ...stripedBarProps } />
        </div>) }
      </React.Fragment>
    );
  }
}
