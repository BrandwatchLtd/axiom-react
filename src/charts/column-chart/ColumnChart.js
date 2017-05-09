import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import { Base } from 'bw-axiom';
import './ColumnChart.css';

export default class ColumnChart extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string.isRequired,
    yAxisWidth: PropTypes.string,
  };

  static childContextTypes = {
    yAxisWidth: PropTypes.string,
  };

  static defaultProps = {
    yAxisWidth: '0rem',
  };

  getChildContext() {
    return {
      yAxisWidth: this.props.yAxisWidth,
    };
  }

  render() {
    const { children, height, ...rest } = this.props;

    return (
      <Base { ...omit(rest, ['yAxisWidth']) }
          className="ax-column-chart"
          style={ { height } }>
        { children }
      </Base>
    );
  }
}
