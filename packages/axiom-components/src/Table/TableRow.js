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
    className: PropTypes.string,
    /** Apply hover styling */
    hover: PropTypes.bool,
    /** When pCardrovided, applies styling to indicate the TableRow is clickable */
    onClick: PropTypes.func,
  };

  render() {
    const {
      children,
      className,
      borderless,
      hover,
      onClick,
      ...rest
    } = this.props;

    const classes = classnames('ax-table__row', {
      'ax-table__row--hover': hover,
      'ax-table__row--clickable': onClick,
      'ax-table__row--borderless': borderless,
    }, className);

    return (
      <Base className={ classes } { ...rest } Component="tr" onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
