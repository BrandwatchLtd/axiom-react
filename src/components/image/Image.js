import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import ImageFallback from './ImageFallback';
import './Image.css';

export default class Image extends Component {
  static propTypes = {
    /** Fallback content when the image fails to load */
    children: PropTypes.node,
    /** SKIP */
    onError: PropTypes.func,
    /** SKIP */
    onLoad: PropTypes.func,
    /** Source of the image */
    src: PropTypes.string,
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
