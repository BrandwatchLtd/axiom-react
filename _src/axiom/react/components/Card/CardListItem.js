import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class CardListItem extends Component {
  static propTypes = {
    children: { node: true },
    clickable: { bool: true },
  };

  render() {
    const { className, children, clickable } = this.props;
    const classes = classnames(className, 'ax-card__list-item', {
      'ax-card__list-item--clickable': clickable,
    });

    return (
      <li { ...this.props } className={ classes }>
        { children }
      </li>
    );
  }
}

export default enhance(CardListItem)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
