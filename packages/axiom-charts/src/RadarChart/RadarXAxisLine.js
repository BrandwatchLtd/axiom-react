import React, { Component } from 'react';

export default class RadarYAxisLine extends Component {
  render() {
    return (
      <line { ...this.props } className="ax-radar__y-axis-line" />
    );
  }
}
