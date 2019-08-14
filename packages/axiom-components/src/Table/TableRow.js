import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class TableRow extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Specifies whether or not the row should have borders */
    borderless: PropTypes.bool,
    /** TableCells */
    children: PropTypes.node,
    /** Apply hover styling */
    hover: PropTypes.bool,
    /** When pCardrovided, applies styling to indicate the TableRow is clickable */
    onClick: PropTypes.func,
  };

  render() {
    const {
      children,
      borderless,
      hover,
      onClick,
      ...rest
    } = this.props;

    const className = classnames('ax-table__row', {
      'ax-table__row--hover': hover,
      'ax-table__row--clickable': onClick,
      'ax-table__row--borderless': borderless,
    });

    return (
      <Base { ...rest } Component="tr" className={ className } onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
