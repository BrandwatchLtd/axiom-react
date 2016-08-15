import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { avatarSizes } from '../avatar/_vars';

if (__INCLUDE_CSS__) {
  require('./Avatar.scss');
}

const avatarSizeIds = avatarSizes.map(({ id }) => id);
const avatarSizeDefaultId = avatarSizes.find((size) => size.default).id;

const propTypes = {
  size: { oneOf: avatarSizeIds, default: avatarSizeDefaultId },
  src: { string: true, isRequired: true },
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
        [`ax-avatar--${size}`]: size,
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
