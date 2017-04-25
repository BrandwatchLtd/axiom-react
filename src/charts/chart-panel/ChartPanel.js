import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './ChartPanel.css';

export default class ChartPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    minimumHeight: PropTypes.string,
  };

  render() {
    const { children, minimumHeight, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart-panel" style={ { minHeight: minimumHeight } }>
        { children }
      </Base>
    );
  }
}
