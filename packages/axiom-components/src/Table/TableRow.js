import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class TableRow extends Component {
  static propTypes = {
    /** Specifies whether or not the row should have borders */
    borderless: PropTypes.bool,
    /** TableCells */
    children: PropTypes.node,
    /** Apply hover styling */
    hover: PropTypes.bool,
  };

  render() {
    const {
      children,
      borderless,
      hover,
      ...rest
    } = this.props;

    const className = classnames('ax-table__row', {
      'ax-table__row--hover': hover,
      'ax-table__row--borderless': borderless,
    });

    return (
      <Base { ...rest } Component="tr" className={ className }>
        { children }
      </Base>
    );
  }
}
