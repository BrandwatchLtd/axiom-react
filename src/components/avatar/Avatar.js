import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Image from '../image/Image';

if (__INCLUDE_CSS__) {
  require('./Avatar.scss');
}

export default class Avatar extends Component {
  static propTypes = {
    /** The width and height of the image.  */
    size: PropTypes.number,
  };

  static defaultProps = {
    size: 35,
  };

  render() {
    const {
      className,
      size,
      ...rest
    } = this.props;

    const style = { height: size, width: size };
    const classes = classnames(className, 'ax-avatar', {
      'ax-avatar--small': size < 70,
      'ax-avatar--large': size >= 70,
    });

    return (
      <Image { ...rest } className={ classes } style={ style }  />
    );
  }
}
