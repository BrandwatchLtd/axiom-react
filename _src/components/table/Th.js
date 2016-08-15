import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Th extends Component {
  static propTypes = {
    children: { node: true },
    isNumber: { bool: true },
    sorting: { oneOf: [1, -1] },
  };

  render() {
    const { className, children, isNumber, sorting, ...rest } = this.props;
    const classes = classnames(className, {
      'ax-table__cell--number': isNumber === true,
      'ax-table__sort--asc': sorting === 1,
      'ax-table__sort--desc': sorting === -1,
    });

    return (
      <th { ...rest } className={ classes }>
        { children }
      </th>
    );
  }
}

export default enhance(Th)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
