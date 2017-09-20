import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class Card extends Component {
  static propTypes = {
    /** Applies styling to indicate the Card has been activated */
    active: PropTypes.bool,
    /** Content inside the card */
    children: PropTypes.node,
    /** Handler for the onClick action, applies styling to indicate it is clickable */
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
