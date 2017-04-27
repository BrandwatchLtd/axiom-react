import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';

export default class ChartTableCell extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest }
          Component="td"
          className="ax-chart-table__cell">
        { children }
      </Base>
    );
  }
}
