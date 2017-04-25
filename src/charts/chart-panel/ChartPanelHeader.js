import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ChartPanelHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className="ax-chart-panel__header">
        { children }
      </div>
    );
  }
}
