import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class TableCell extends Component {
  static propTypes = {
    /** Tabular data for this cell */
    children: PropTypes.node,
    className: PropTypes.string,
    /** Sets the horizontal padding around the cell's content */
    horizontalPadding: PropTypes.oneOf(['none', 'medium']),
    /** Marks cell as selected */
    isSelected: PropTypes.bool,
    /** Set text-align */
    textAlign: PropTypes.oneOf(['left', 'right', 'centre']),
    /** Sets the vertical padding around the cell's content */
    verticalPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  };

  static defaultProps = {
    horizontalPadding: 'medium',
    isSelected: false,
    textAlign: 'left',
    verticalPadding: 'small',
  }

  render() {
    const {
      className,
      children,
      horizontalPadding,
      isSelected,
      textAlign,
      verticalPadding,
      ...rest
    } = this.props;

    const classes = classnames(
      'ax-table__cell',
      `ax-table__cell--align-${textAlign}`,
      `ax-table__cell--horizontal-padding-${horizontalPadding}`,
      `ax-table__cell--vertical-padding-${verticalPadding}`,
      { 'ax-table__cell--selected': isSelected },
      className
    );

    return (
      <Base { ...rest } Component="td" className={ classes }>
        { children }
      </Base>
    );
  }
}
