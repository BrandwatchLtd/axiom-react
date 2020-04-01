import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Table.css';
import classnames from 'classnames';

export default class Table extends Component {
  static propTypes = {
    /** TableHead and/or TableBody */
    children: PropTypes.node,
    className: PropTypes.string,
    space: PropTypes.string,
  };

  static defaultProps = {
    space: 'x6',
  };

  render() {
    const { children, className, space, ...rest } = this.props;

    const classes = classnames('ax-table', className);

    return (
      <Base
        Component="table"
        space={space}
        textColor="subtle"
        {...rest}
        className={classes}
      >
        {children}
      </Base>
    );
  }
}
