import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './ChartPanel.css';

export default class ChartPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    minHeight: PropTypes.string,
  };

  render() {
    const { children, minHeight, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart-panel" style={ { minHeight } }>
        { children }
      </Base>
    );
  }
}
