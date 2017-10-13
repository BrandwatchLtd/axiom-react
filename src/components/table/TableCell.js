import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class TableCell extends Component {
  static propTypes = {
    /** Tabular data for this cell */
    children: PropTypes.node,
    /** Marks cell as selected */
    isSelected: PropTypes.bool,
    /** Set text-align */
    textAlign: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    isSelected: false,
    textAlign: 'left',
  }

  render() {
    const {
      children,
      isSelected,
      textAlign,
      ...rest
    } = this.props;

    const className = classnames(
      'ax-table__cell',
      `ax-table__cell--align-${textAlign}`,
      { 'ax-table__cell--selected': isSelected }
    );

    return (
      <Base { ...rest } Component="td" className={ className }>
        { children }
      </Base>
    );
  }
}
