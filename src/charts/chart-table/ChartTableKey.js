import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../../components/base/Base';

export default class ChartTableKey extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart-table__key" space="x2">
        { children }
      </Base>
    );
  }
}
