import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';
import './AxiomTitle.css';

export default class AxiomTitle extends Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
  };

  static defaultProps = {
    height: 20,
  };

  render() {
    const { height, width, ...rest } = this.props;
    const { body, viewBox } = require('../../assets/axiom-text.svg');
    const [,, viewBoxWidth, viewBoxHeight] = viewBox.split(' ');
    const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;
    const style = {
      width: height ? `${height * viewBoxAspectRatio}px` : `${width}px`,
      height: height ? height : `${width / viewBoxAspectRatio}px`,
    };

    return (
      <Base { ...rest }
          Component="svg"
          className="si-axiom-title"
          dangerouslySetInnerHTML={ { __html: body } }
          style={ style }
          viewBox={ viewBox } />
    );
  }
}
