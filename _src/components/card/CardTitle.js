import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class CardTitle extends Component {
  static propTypes = {
    children: { node: true },
    title: { string: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-card__title');

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(CardTitle)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
