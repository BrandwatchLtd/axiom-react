import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Chart.css';

export default class Chart extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Sets a minimum height on the Chart. Useful to center a Progress inside
     * the ChartBody while a visual is loading or a no data message when the
     * visual won't show any data.
     */
    minimumHeight: PropTypes.string,
  };

  render() {
    const { children, minimumHeight, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart" style={ { minHeight: minimumHeight } }>
        { children }
      </Base>
    );
  }
}

