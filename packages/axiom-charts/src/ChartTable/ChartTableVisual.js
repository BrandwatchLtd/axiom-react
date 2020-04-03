import PropTypes from "prop-types";
import React, { Component } from "react";

export default class ChartTableVisual extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div {...rest} className="ax-chart-table__visual">
        {children}
      </div>
    );
  }
}
