import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import { Base } from 'bw-axiom';
import './ChartTable.css';

export default class ChartTable extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    labelColumnWidth: PropTypes.string,
  };

  static childContextTypes = {
    labelColumnWidth: PropTypes.string,
  };

  static defaultProps = {
    labelColumnWidth: '10rem',
  };

  getChildContext() {
    return {
      labelColumnWidth: this.props.labelColumnWidth,
    };
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...omit(rest, ['labelColumnWidth']) }
          className="ax-chart-table">
        { children }
      </Base>
    );
  }
}
