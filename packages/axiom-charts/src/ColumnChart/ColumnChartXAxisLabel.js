import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Heading, Strong } from '@brandwatch/axiom-components';

export default class ColumnChartXAxisLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base {...rest} className="ax-column-chart__x-axis-label">
        <Heading>
          <Strong>{children}</Strong>
        </Heading>
      </Base>
    );
  }
}
