import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, ImageFallback } from 'bw-axiom';
import './Image.css';

export default class Image extends Component {
  static propTypes = {
    /** Fallback content when the image fails to load */
    children: PropTypes.node,
    /** Source of the image */
    src: PropTypes.string,
    /** SKIP */
    onError: PropTypes.func,
    /** SKIP */
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
            space="x4"
            { ...rest }
            Component="img"
            className="ax-image"
            src={ src } />
      </ImageFallback>
    );
  }
}
