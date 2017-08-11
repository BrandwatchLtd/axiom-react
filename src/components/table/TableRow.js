import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';

export default class TableRow extends Component {
  static propTypes = {
    /** TableCells */
    children: PropTypes.node,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } Component="tr" className="ax-table__row">
        { children }
      </Base>
    );
  }
}
