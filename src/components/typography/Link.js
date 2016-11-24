import React, { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Link.scss');
}

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    inheritColor: PropTypes.bool,
    noDecoration: PropTypes.bool,
    supressStyle: PropTypes.bool,
    to: PropTypes.string,
  };

  render() {
    const {
      className,
      children,
      to,
      disabled,
      inheritColor,
      noDecoration,
      supressStyle,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      'ax-link': supressStyle !== true,
      'ax-link--disabled': disabled,
      'ax-link--inherit-color': inheritColor,
      'ax-link--no-decoration': noDecoration,
    });

    if (to) {
      return (
        <RouterLink { ...rest } className={ classes } to={ to }>
          { children }
        </RouterLink>
      );
    }

    return (
      <Base { ...rest } Component="a" className={ classes }>
        { children }
      </Base>
    );
  }
}
