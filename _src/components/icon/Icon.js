import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Icon.scss');
}

export class Icon extends Component {
  static propTypes = {
    fixedWidth: { bool: true },
    name: { string: true, isRequired: true },
    size: { oneOf: ['lg', '2x', '3x', '4x', '5x'] },
  };

  render() {
    const { className, name, size, fixedWidth, ...rest } = this.props;
    const classes = classnames(className,
      'ax-icon',
      `ax-icon-${name}`, {
        [`ax-icon-${size}`]: size,
        'ax-icon-fw': fixedWidth === true,
      }
    );

    return (
      <i { ...rest } className={ classes } />
    );
  }
}

export default enhance(Icon)(
  addPropTypes('global'),
  addClassName('global'),
);
