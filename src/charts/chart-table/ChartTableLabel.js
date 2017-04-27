import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartTableCell from './ChartTableCell';

export default class ChartTableLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    labelColumnWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    const { labelColumnWidth } = this.context;

    return (
      <ChartTableCell { ...rest }
          style={ { width: labelColumnWidth } }
          textColor="subtle">
        { children }
      </ChartTableCell>
    );
  }
}
