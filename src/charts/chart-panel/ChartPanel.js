import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './ChartPanel.css';

export default class ChartPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart-panel">
        { children }
      </Base>
    );
  }
}
