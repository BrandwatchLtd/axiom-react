import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class TableRow extends Component {
  static propTypes = {
    /** TableCells */
    children: PropTypes.node,
    /** Apply hover styling */
    hover: PropTypes.bool,
  };

  render() {
    const {
      children,
      hover,
      ...rest
    } = this.props;

    const className = classnames('ax-table__row', {
      'ax-table__row--hover': hover,
    });

    return (
      <Base { ...rest } Component="tr" className={ className }>
        { children }
      </Base>
    );
  }
}
