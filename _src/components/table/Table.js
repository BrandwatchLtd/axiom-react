import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Table.scss');
}

export class Table extends Component {
  static propTypes = {
    borders: { oneOf: [true, 'v', 'h'] },
    children: { node: true },
    sortable: { bool: true },
    striped: { bool: true },
  };

  render() {
    const {
      className,
      children,
      sortable,
      striped,
      borders,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-table', {
        'ax-table--sortable': sortable === true,
        'ax-table--striped': striped === true,
        'ax-table--borders': borders === true,
        'ax-table--borders--v': borders === 'v',
        'ax-table--borders--h': borders === 'h',
      }
    );

    return (
      <table { ...rest } className={ classes }>
        { children }
      </table>
    );
  }
}

export default enhance(Table)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
