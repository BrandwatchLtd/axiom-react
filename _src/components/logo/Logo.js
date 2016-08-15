import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';

export class LogoVertical extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
    height: { number: true },
    viewBoxHeight: { number: true, isRequired: true  },
    viewBoxWidth: { number: true, isRequired: true },
    width: { number: true },
  };

  render() {
    const {
      children,
      className,
      width,
      height,
      viewBoxWidth,
      viewBoxHeight,
      ...rest,
    } = this.props;

    const classes = classnames(className, 'ax-logo');
    const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;
    const style = {
      width: height ? (height * viewBoxAspectRatio) : width,
      height: height ? height : (width / viewBoxAspectRatio),
    };

    return (
      <div { ...rest } className={ classes } style={ style }>
        { children }
      </div>
    );
  }
}

export default enhance(LogoVertical)(
  addPropTypes(),
);
