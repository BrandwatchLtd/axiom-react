import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { findComponent } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { breakpointClassName } from '../../utils/class-name';
import { breakpointIds, colorIds } from '../../../sass';
import Icon from '../Icon/Icon';

const propTypes = {
  children: {
    node: true,
  },
  color: {
    oneOf: [...colorIds],
    default: 'primary',
  },
  size: {
    oneOf: ['sm', 'md', 'lg'],
    default: 'md',
  },
  full: {
    oneOf: [true, ...breakpointIds],
  },
};

export class Label extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      children,
      color = propTypes.color.default,
      size = propTypes.size.default,
      full,
    } = this.props;

    const icon = findComponent(children, Icon);
    const classes = classnames(className,
      'ax-label', {
        [`ax-label--${color}`]: color,
        'ax-label--sm': size === 'sm',
        'ax-label--md': size === 'md',
        'ax-label--lg': size === 'lg',
        'ax-label--full': full === true,
      },
      breakpointClassName(full, ({ id }) => `ax-button--full--${id}`),
    );

    return (
      <span { ...blacklist(this.props, ['color']) } className={ classes }>
        { do {
          if (icon) {
            {cloneElement(icon, {
              className: 'ax-label__icon',
            })}
          }
        } }

        { Children.toArray(children).filter((component) => component.type !== Icon) }
      </span>
    );
  }
}

export default enhance(Label)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);

