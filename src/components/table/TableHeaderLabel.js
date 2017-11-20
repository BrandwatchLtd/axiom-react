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

    const className = classnames(
      'ax-table__header-label',
      `ax-table__header-label--align-${textAlign}`,
      {
        'ax-table__header-label--grow': grow,
        'ax-table__header-label--selected': sortDirection !== undefined,
        'ax-table__header-label--shrink': shrink,
      }
    );

    return (
      <Base { ...rest } Component="th" className={ className }>
        <button
            className="ax-table__header-button"
            disabled={ !onClick }
            onClick={ onClick }>

          { children }

          <TextIcon
              cloak={ sortDirection === undefined }
              name={ sortDirection === 'descending' ? 'triangle-down' : 'triangle-up' }
              spaceLeft={ textAlign === 'left' ? 'x2' : undefined }
              spaceRight={ textAlign === 'right' ? 'x2' : undefined } />
        </button>
      </Base>
    );
  }
}
