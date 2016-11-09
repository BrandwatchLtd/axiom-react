import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Image from '../image/Image';

if (__INCLUDE_CSS__) {
  require('./Avatar.scss');
}

const propTypes = {
  size: { number: true, default: 35 },
};

export class Avatar extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      size = propTypes.size.default,
      ...rest
    } = this.props;

    const classes = classnames(className, 'ax-avatar');
    const style = { height: size, width: size };

    return (
      <Image { ...rest } className={ classes } style={ style }  />
    );
  }
}

export default enhance(Avatar)(addPropTypes());
