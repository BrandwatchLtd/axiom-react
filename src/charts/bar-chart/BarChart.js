import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Base } from 'bw-axiom';
import './BarChart.css';

export default class BarChart extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string.isRequired,
  };

  render() {
    const {
      children,
      height,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } className="ax-bar-chart" style={ { height: height } }>
        { children }
      </Base>
    );
  }
}