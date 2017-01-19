import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./CardListItem.scss');
}

export default class CardListItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const { active, children, onClick, ...rest } = this.props;
    const classes = classnames('ax-card-list__item', {
      'ax-card-list__item--active': active,
      'ax-card-list__item--clickable': onClick,
    });

    return (
      <Base { ...rest } Component="li" className={ classes } onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
