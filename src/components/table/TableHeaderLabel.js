import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import TextIcon from '../typography/TextIcon';

export default class TableHeaderLabel extends Component {
  static propTypes = {
    /** Table header label */
    children: PropTypes.node,
    /** Expands table column */
    grow: PropTypes.bool,
    /** Makes label clickable */
    onClick: PropTypes.func,
    /** Shrinks table column */
    shrink: PropTypes.bool,
    /** Selects the column and sets the sort direction */
    sortDirection: PropTypes.oneOf(['ascending', 'descending']),
    /** Set text-align */
    textAlign: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    textAlign: 'left',
  }

  render() {
    const {
      children,
      grow,
      onClick,
      shrink,
      sortDirection,
      textAlign,
      ...rest
    } = this.props;

    const isSelected = Boolean(sortDirection);

    const className = classnames(
      'ax-table__header-label',
      `ax-table__header-label--align-${textAlign}`,
      {
        'ax-table__header-label--grow': grow,
        'ax-table__header-label--selected': isSelected,
        'ax-table__header-label--shrink': shrink,
      }
    );

    const textIconProps = {
      [textAlign === 'left' ? 'spaceLeft' : 'spaceRight']: 'x2',
    };

    const iconName = sortDirection === 'descending' ? 'triangle-down' : 'triangle-up';

    let reactEl;

    if (onClick) {
      if (isSelected) {
        reactEl = (
          <button className="ax-table__header-button" onClick={ onClick }>
            { [
              children,
              <TextIcon key="icon" name={ iconName } { ...textIconProps } />,
            ] }
          </button>
        );
      } else {
        reactEl = (
          <button className="ax-table__header-button" onClick={ onClick }>
            {children}
          </button>
        );
      }
    } else {
      if (isSelected) {
        reactEl = [
          children,
          <TextIcon key="icon" name={ iconName } { ...textIconProps } />,
        ];
      } else {
        reactEl = children;
      }
    }

    return (
      <Base { ...rest } Component="th" className={ className }>
        <div className="ax-table__header-label-underline">
          { reactEl }
        </div>
      </Base>
    );
  }
}
