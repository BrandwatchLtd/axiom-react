import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';

export default class ChartTableLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string.isRequired,
  };

  render() {
    const { children, width, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chart-table__label" style={ { width } }>
        { children }
      </Base>
    );
  }
}
