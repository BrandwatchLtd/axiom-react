import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Link.scss');
}

export class Link extends Component {
  static propTypes = {
    children: { node: true },
    disabled: { bool: true },
    inheritColor: { bool: true },
    noDecoration: { bool: true },
    supressStyle: { bool: true },
    to: { string: true },
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

export default enhance(Link)(addPropTypes());
