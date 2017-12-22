import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './Card.css';

const cardListStyleProps = {
  divided: {
    border: false,
    elevation: 'x0',
    space: 'x0',
  },
  seamless: {
    boder: false,
    elevation: 'x0',
    space: 'x0',
  },
  separate: {
    border: true,
    elevation: 'x1',
    space: 'x2',
  },
};

export default class Card extends Component {
  static propTypes = {
    /** Applies styling to indicate the Card is in an active state */
    active: PropTypes.bool,
    /** Applies border styling */
    border: PropTypes.bool,
    /** Content to be inserted inside the Card */
    children: PropTypes.node.isRequired,
    /** Color variation */
    color: PropTypes.oneOf(['default', 'dark', 'darker']),
    /** Applies styling to give the Card an elevated feel from the page */
    elevation: PropTypes.oneOf(['x0', 'x1', 'x2']),
    /** Applies styling to indicate the Card is in an hovered state */
    hover: PropTypes.bool,
    /** When provided, applies styling to indicate the Card is clickable */
    onClick: PropTypes.func,
    /** Increases/decreases the size of the card */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    color: 'default',
    elevation: 'x0',
    size: 'medium',
  };

  static contextTypes = {
    cardListStyle: PropTypes.oneOf(['seamless', 'separate']),
  };

  render() {
    const { cardListStyle } = this.context;
    const props = {
      ...this.props,
      ...cardListStyleProps[cardListStyle],
    };

    const {
      active,
      border,
      children,
      color,
      elevation,
      hover,
      onClick,
      size,
      ...rest
    } = props;

    const classes = classnames('ax-card',
      `ax-card--elevation-${elevation}`,
      `ax-card--size-${size}`, {
        'ax-card--active': active,
        'ax-card--border': border,
        [`ax-card--color-${color}`]: color,
        'ax-card--clickable': onClick,
        'ax-card--hover': hover,
      }
    );

    return (
      <Base { ...rest } className={ classes } onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
