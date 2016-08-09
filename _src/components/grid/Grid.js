import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { addDynamicClass, breakpointClassName } from '../_utils/class-name';
import { breakpointIds } from '../../design-patterns/layout/_vars';
import { gridGutters } from './_vars';

if (__INCLUDE_CSS__) {
  require('./Grid.scss');
}

export class Grid extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
    fit: { oneOf: [true, ...breakpointIds] },
    full: { oneOf: [true, ...breakpointIds] },
    gutters: { oneOf: [false, ...gridGutters.map(({ id }) => id)] },
    hAlign: { oneOf: ['left', 'center', 'right', 'around', 'between'] },
    hGutters: { bool: true },
    responsive: { oneOf: [false] },
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
    vGutters: { bool: true },
  };

  render() {
    const {
      className,
      children,
      responsive = true,
      gutters = true,
      vGutters = true,
      hGutters = true,
      full,
      fit,
      vAlign,
      hAlign,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-grid', {
        'ax-grid--unresponsive': responsive === false,
        'ax-grid--gutters-none': gutters === false,
        'ax-grid--gutters-none-v': vGutters === false,
        'ax-grid--gutters-none-h': hGutters === false,
        'ax-grid--full': full === true,
        'ax-grid--fit': fit === true,
        'ax-grid--top': vAlign === 'top',
        'ax-grid--middle': vAlign === 'middle',
        'ax-grid--bottom': vAlign === 'bottom',
        'ax-grid--left': hAlign === 'left',
        'ax-grid--center': hAlign === 'center',
        'ax-grid--right': hAlign === 'right',
        'ax-grid--around': hAlign === 'around',
        'ax-grid--between': hAlign === 'between',
      },
      addDynamicClass(gridGutters, ({ id }) => gutters === id, ({ id }) => `ax-grid--gutters--${id}`),
      breakpointClassName(full, ({ id }) => `ax-grid--full--${id}`),
      breakpointClassName(fit, ({ id }) => `ax-grid--fit--${id}`),
    );

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(Grid)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
