import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, ImageFallback } from 'bw-axiom';
import './Image.css';

export default class Image extends Component {
  static propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
  };

  render() {
    const { children, onError, onLoad, src, ...rest } = this.props;

    return (
      <ImageFallback
          fallback={ children }
          onError={ onError }
          onLoad={ onLoad }
          src={ src }>
        <Base
            space="small"
            { ...rest }
            Component="img"
            className="ax-image"
            src={ src } />
      </ImageFallback>
    );
  }
}
