import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import classnames from 'classnames';

export default class TableHeader extends Component {
  static propTypes = {
    /** TableHeaderLabels */
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames('ax-table__header', className);

    return (
      <Base {...rest} Component="thead" className={classes}>
        <tr>{children}</tr>
      </Base>
    );
  }
}
