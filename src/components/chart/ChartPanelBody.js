import React, { Component, PropTypes } from 'react';

export default class ChartPanelBody extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className="ax-chart-panel__body">
        { children }
      </div>
    );
  }
}
