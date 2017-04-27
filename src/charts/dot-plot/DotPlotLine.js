import React, { Component } from 'react';
import './DotPlotLine.css';

export default class DotPlotLine extends Component {
  render() {
    return (
      <svg { ...this.props }
          className="ax-dot-plot__line"
          height="1px"
          preserveAspectRatio="none"
          shapeRendering="crispEdges"
          viewBox="0 0 1 1"
          y="50%">
        <path
            className="ax-dot-plot__line-path"
            d="M 0 1 H 1"
            strokeWidth="1" />
      </svg>
    );
  }
}
