import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Card.css';

const cardListStyleProps = {
  divided: {
    border: false,
    shadow: false,
    space: 'x0',
  },
  seamless: {
    border: false,
    shadow: false,
    space: 'x0',
  },
  separate: {
    border: true,
    shadow: false,
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
    /** Applies styling to indicate the Card is in an hovered state */
    hover: PropTypes.bool,
    /** When provided, applies styling to indicate the Card is clickable */
    onClick: PropTypes.func,
    /** Shade of the background color */
    shade: PropTypes.oneOf(['shade-1', 'shade-2', 'shade-3', 'shade-4']),
    /** Applies a shadow to the card */
    shadow: PropTypes.bool,
    /** Increases/decreases the size of the card */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    shade: 'shade-1',
    size: 'medium',
  };

  static contextTypes = {
    cardListStyle: PropTypes.oneOf(['divided', 'seamless', 'separate']),
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
      hover,
      onClick,
      shade,
      shadow,
      size,
      ...rest
    } = props;

    const classes = classnames('ax-card',
      `ax-card--size-${size}`, {
        'ax-card--active': active,
        'ax-card--border': border,
        'ax-card--clickable': onClick,
        'ax-card--hover': hover,
        [`ax-card--${shade}`]: shade,
        'ax-card--shadow': shadow,
      }
    );

    return (
      <Base { ...rest } className={ classes } onClick={ onClick }>
        { children }
      </Base>
    );
  }
}
