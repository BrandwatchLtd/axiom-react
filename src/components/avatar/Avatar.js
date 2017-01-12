import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Avatar.scss');
}

export default class Avatar extends Component {
  static propTypes = {
    /** The width and height of the image.  */
    size: PropTypes.string,
  };

  static defaultProps = {
    size: '2rem',
  };

  render() {
    const {
      className,
      size,
      ...rest
    } = this.props;

    const style = { height: size, width: size };
    const classes = classnames(className, 'ax-avatar', {
      'ax-avatar--small': parseFloat(size, 10) < 4.5,
      'ax-avatar--large': parseFloat(size, 10) >= 4.5,
    });

    return (
      <Image { ...rest } className={ classes } style={ style }  />
    );
  }
}
