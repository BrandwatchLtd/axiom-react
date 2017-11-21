import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class TableHeader extends Component {
  static propTypes = {
    /** TableHeaderLabels */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="thead" className="ax-table__header">
        <tr>{ children }</tr>
      </Base>
    );
  }
}
