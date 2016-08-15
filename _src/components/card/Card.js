import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Card.scss');
}

export class Card extends Component {
  static propTypes = {
    children: { node: true },
    transparent: { bool: true },
  };

  render() {
    const { className, children, transparent, ...rest } = this.props;
    const classes = classnames(className,
      'ax-card', {
        'ax-card--transparent': transparent === true,
      },
    );

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(Card)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
