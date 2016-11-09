import React, { Component } from 'react';
import classnames from 'classnames';
import { breakpointIds } from '../../design-patterns/layout/_vars';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';
import { labelSizes, labelColors } from '../label/_vars';

if (__INCLUDE_CSS__) {
  require('./Label.scss');
}


const labelSizeIds = labelSizes.map(({ id }) => id);
const labelSizeDefaultId = labelSizes.find((size) => size.default).id;
const labelColorIds = labelColors.map(({ id }) => id);
const labelColorDefaultId = labelColors.find((color) => color.default).id;

const propTypes = {
  children: { node: true },
  color: { oneOf: labelColorIds, default: labelColorDefaultId },
  size: { oneOf: labelSizeIds, default: labelSizeDefaultId },
  full: { oneOf: [true, ...breakpointIds] },
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
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-label', {
        [`ax-label--${size}`]: size,
        [`ax-label--${color}`]: color,
        'ax-label--full': full === true,
        [`ax-label--full--${full}`]: full & full !== true,
      },
    );

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(Label)(addPropTypes());

