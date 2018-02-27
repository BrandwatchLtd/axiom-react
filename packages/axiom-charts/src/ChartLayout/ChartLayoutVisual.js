import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';

export default class ChartLayoutKey extends Component {
  render() {
    return (
      <Base { ...this.props } className="ax-chart-layout__visual" />
    );
  }
}
