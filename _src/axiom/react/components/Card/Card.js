import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Card extends Component {
  static propTypes = {
    children: { node: true },
    transparent: { bool: true },
  };

  render() {
    const { className, children, transparent } = this.props;
    const classes = classnames(className,
      'ax-card', {
        'ax-card--transparent': transparent === true,
      },
    );

    return (
      <div { ...this.props } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(Card)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
