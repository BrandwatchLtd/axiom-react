import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { colorIds, colorVariations, colorBaseVariation } from '../../../sass';

const propTypes = {
  children: { node: true },
  color: { oneOf: [...colorIds] },
  image: { string: true },
  overlay: { bool: true },
  size: { oneOf: ['sm', 'md', 'lg'], default: 'md' },
  variation: { oneOf: [...colorVariations], default: colorBaseVariation },
};

export class Billboard extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      children,
      image,
      color,
      variation = propTypes.variation.default,
      overlay,
      size = propTypes.size.default,
    } = this.props;

    const classes = classnames(className,
      'ax-billboard', {
        [`ax-billboard--${color}--${variation}`]: color,
        'ax-billboard--image': image,
        'ax-billboard--overlay': overlay === true,
        'ax-billboard--sm': size === 'sm',
        'ax-billboard--md': size === 'md',
        'ax-billboard--lg': size === 'lg',
      }
    );

    const style = {
      backgroundImage: image && `url('${image}')`,
    };

    return (
      <div { ...this.props } className={ classes } style={ style }>
        { children }
      </div>
    );
  }
}

export default enhance(Billboard)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
