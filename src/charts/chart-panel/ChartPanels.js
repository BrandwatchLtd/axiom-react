import React, { Component, PropTypes } from 'react';
import './ChartPanels.css';

export default class ChartPanels extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className="ax-chart-panels">
        { children }
      </div>
    );
  }
}
