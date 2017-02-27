import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./ChartPanels.scss');
}

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
