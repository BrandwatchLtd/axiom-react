import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Td extends Component {
  static propTypes = {
    children: { node: true },
    isNumber: { bool: true },
  };

  render() {
    const { className, children, isNumber } = this.props;
    const classes = classnames(className, {
      'ax-table__cell--number': isNumber === true,
    });

    return (
      <td { ...this.props } className={ classes }>
        { children }
      </td>
    );
  }
}

export default enhance(Td)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
