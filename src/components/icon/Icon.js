import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Icon.scss');
}

const sizeToFaMap = {
  'small': undefined,
  'medium': 'lg',
  'large': '2x',
  'xlarge': '3x',
  'xxlarge': '4x',
  'xxxlarge': '5x',
};

const propTypes = {
  fixedWidth: { bool: true },
  name: { string: true, isRequired: true },
  size: { oneOf: Object.keys(sizeToFaMap), default: 'small' },
};

export class Icon extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      name,
      size = propTypes.size.default,
      fixedWidth,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-icon',
      `ax-icon-${name}`, {
        [`ax-icon-${sizeToFaMap[size]}`]: sizeToFaMap[size],
        'ax-icon-fw': fixedWidth === true,
      }
    );

    return (
      <Base { ...rest } Component="i" className={ classes } />
    );
  }
}

export default enhance(Icon)(addPropTypes());
