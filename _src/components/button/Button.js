import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { findComponent } from '../_utils/components';
import { breakpointClassName } from '../_utils/class-name';
import { breakpointIds } from '../../design-patterns/layout/_vars';
import { colorIds } from '../../design-patterns/colors/_vars';
import Icon from '../icon/Icon';

if (__INCLUDE_CSS__) {
  require('./Button.scss');
}

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
      ...rest,
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
      <button { ...rest } className={ classes }>
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
