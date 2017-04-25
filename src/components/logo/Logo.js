import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Logo.css';

export default class Logo extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
    viewBoxHeight: PropTypes.number.isRequired,
    viewBoxWidth: PropTypes.number.isRequired,
    width: PropTypes.string,
  };

  render() {
    const {
      children,
      width,
      height,
      viewBoxWidth,
      viewBoxHeight,
      ...rest
    } = this.props;

    const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;
    const style = {
      width: height ? `${(parseFloat(height, 10) * viewBoxAspectRatio)}rem` : width,
      height: height ? height : `${(parseFloat(width, 10) / viewBoxAspectRatio)}rem`,
    };

    return (
      <Base { ...rest } className="ax-logo" style={ style }>
        { children }
      </Base>
    );
  }
}
