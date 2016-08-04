import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { findComponent } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { breakpointClassName } from '../../utils/class-name';
import { breakpointIds, colorIds } from '../../../sass';
import Icon from '../Icon/Icon';

const propsTypes = {
  children: { node: true },
  circular: { bool: true },
  outlined: { bool: true },
  color: { oneOf: [...colorIds], default: 'primary' },
  full: { oneOf: [true, ...breakpointIds] },
  size: { oneOf: ['sm', 'md', 'lg'], default: 'md' },
};

export class Button extends Component {
  static propTypes = propsTypes;

  render() {
    const {
      className,
      circular,
      children,
      color = propsTypes.color.default,
      size = propsTypes.size.default,
      full,
      outlined,
    } = this.props;

    const icon = findComponent(children, Icon);
    const filteredChildren = Children.toArray(children).filter((component) => component.type !== Icon);
    const classes = classnames(className,
      'ax-button', {
        [`ax-button--${color}`]: color,
        'ax-button--outlined': outlined,
        'ax-button--circular': circular,
        'ax-button--sm': size === 'sm',
        'ax-button--md': size === 'md',
        'ax-button--lg': size === 'lg',
        'ax-button--full': full === true,
      },
      breakpointClassName(full, ({ id }) => `ax-button--full--${id}`),
    );

    return (
      <button { ...blacklist(this.props, ['color']) } className={ classes }>
        {
          do {
            if (icon) {
              {
                cloneElement(icon, {
                  className: classnames({
                    'ax-button__icon': filteredChildren.length,
                  }),
                })
              }
            }
          }
        }

        { filteredChildren }
      </button>
    );
  }
}

export default enhance(Button)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
