import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

export default class Card extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  render() {
    const { active, children, onClick, ...rest } = this.props;
    const classes = classnames('ax-card', {
      'ax-card--active': active,
      'ax-card--clickable': onClick,
    });

    return (
      <Base { ...rest } Component="li" className={ classes } onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
