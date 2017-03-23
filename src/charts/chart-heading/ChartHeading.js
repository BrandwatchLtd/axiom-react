import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './ChartHeading.css';

export default class ChartHeading extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="span" className="ax-chart-heading">
        { children }
      </Base>
    );
  }
}
