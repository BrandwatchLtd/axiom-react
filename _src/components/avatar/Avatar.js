import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Avatar.scss');
}

const propTypes = {
  size: {
    oneOf: ['sm', 'md', 'lg'],
    default: 'md',
  },
  src: {
    string: true,
    isRequired: true,
  },
};

export class Avatar extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      size = propTypes.size.default,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-avatar', {
        'ax-avatar--sm': size === 'sm',
        'ax-avatar--md': size === 'md',
        'ax-avatar--lg': size === 'lg',
      }
    );

    return (
      <img { ...rest } className={ classes } />
    );
  }
}

export default enhance(Avatar)(
  addPropTypes('global'),
  addClassName('global'),
);
