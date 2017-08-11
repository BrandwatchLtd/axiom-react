import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import classnames from 'classnames';

export default class TableCell extends Component {
  static propTypes = {
    /** Tabular data with the cell */
    children: PropTypes.node,
    /**
     * Allows the cell to occupy as much room as possible. Other cells
     * may require fixed widths or text wrapping to be turned off to maintain
     * visual quality.
     */
    grow: PropTypes.bool,
  };

  render() {
    const {
      children,
      grow,
      ...rest
    } = this.props;

    const classes = classnames('ax-table__cell', {
      'ax-table__cell--grow': grow,
    });

    return (
      <Base { ...rest } Component="td" className={ classes }>
        { children }
      </Base>
    );
  }
}
