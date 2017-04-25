import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ChartPanels.css';

export default class PanelHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className="ax-panel__header">
        { children }
      </div>
    );
  }
}
