import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Link.scss');
}

export class Link extends Component {
  static propTypes = {
    children: { node: true },
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
      inheritColor,
      noDecoration,
      supressStyle,
      ...rest,
    } = this.props;

    const classes = classnames(className, {
      'ax-link': supressStyle !== true,
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
      <a { ...rest } className={ classes }>
        { children }
      </a>
    );
  }
}

export default enhance(Link)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
