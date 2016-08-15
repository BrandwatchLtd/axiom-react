import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { findComponent } from '../_utils/components';
import { breakpointIds } from '../../design-patterns/layout/_vars';
import { colorIds } from '../../design-patterns/colors/_vars';
import { buttonSizes } from '../button/_vars';
import Icon from '../icon/Icon';

if (__INCLUDE_CSS__) {
  require('./Button.scss');
}

const buttonSizeIds = buttonSizes.map(({ id }) => id);
const buttonSizeDefaultId = buttonSizes.find((size) => size.default).id;

const propsTypes = {
  children: { node: true },
  circular: { bool: true },
  outlined: { bool: true },
  color: { oneOf: [...colorIds], default: 'primary' },
  full: { oneOf: [true, ...breakpointIds] },
  size: { oneOf: buttonSizeIds, default: buttonSizeDefaultId },
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
        [`ax-button--${size}`]: size,
        [`ax-button--${color}`]: color,
        'ax-button--outlined': outlined,
        'ax-button--circular': circular,
        'ax-button--full': full === true,
        [`ax-button--full--${full}`]: full && full !== true,
      },
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
