import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class CardList extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-card__list');

    return (
      <ul { ...rest } className={ classes }>
        { children }
      </ul>
    );
  }
}

export default enhance(CardList)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
