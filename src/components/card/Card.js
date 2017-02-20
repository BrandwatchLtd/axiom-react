import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Card.scss');
}

export default class Card extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    compact: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'large']),
    onClick: PropTypes.func,
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { active, children, compact, onClick, size, ...rest } = this.props;
    const classes = classnames('ax-card', {
      'ax-card--active': active,
      'ax-card--clickable': onClick,
      'ax-card--compact': compact,
      [`ax-card--${size}`]: size,
    });

    return (
      <Base { ...rest } className={ classes } onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
