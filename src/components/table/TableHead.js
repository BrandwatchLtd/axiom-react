import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class TableHead extends Component {
  static propTypes = {
    /** TableRows */
    children: PropTypes.node,
    /** Vertical padding between TableRows, can also used to space from TableBody */
    rowPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  };

  render() {
    const { children, rowPadding, ...rest } = this.props;
    const classes = classnames('ax-table__head', {
      [`ax-table__head--row-padding-${rowPadding}`]: rowPadding,
    });

    return (
      <Base { ...rest } Component="thead" className={ classes }>
        { children }
      </Base>
    );
  }
}
