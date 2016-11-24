import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class LogoVertical extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number,
    viewBoxHeight: PropTypes.number.isRequired,
    viewBoxWidth: PropTypes.number.isRequired,
    width: PropTypes.number,
  };

  render() {
    const {
      children,
      className,
      width,
      height,
      viewBoxWidth,
      viewBoxHeight,
      ...rest
    } = this.props;

    const classes = classnames(className, 'ax-logo');
    const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;
    const style = {
      width: height ? (height * viewBoxAspectRatio) : width,
      height: height ? height : (width / viewBoxAspectRatio),
    };

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }
      </Base>
    );
  }
}
