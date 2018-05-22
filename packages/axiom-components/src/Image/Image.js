import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import ImageFallback from './ImageFallback';
import './Image.css';

export default class Image extends Component {
  static propTypes = {
    /** Border size around the image */
    border: PropTypes.oneOf(['small', 'large']),
    /** Border colour around the image */
    borderColor: PropTypes.oneOf([
      'highlight',
      'success',
      'error',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'electric-dreams',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'terra-form',
      'primeval-soup',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'ground-control',
      'space-oddity',
      'deep-thought',
      'luna-dust',
      'carbon',
    ]),
    /** Fallback content when the image fails to load */
    children: PropTypes.node,
    /** Height of the image. When shape is circle this will be ignored and width will be applied. */
    height: PropTypes.string,
    /** @type {[type]} [description] */
    maxWidth: PropTypes.string,
    /** SKIP */
    onError: PropTypes.func,
    /** SKIP */
    onLoad: PropTypes.func,
    /** Shape of the image */
    shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
    /** Source of the image */
    src: PropTypes.string,
    /** Width of the image. When shape is circle this will also be used for height. */
    width: PropTypes.string,
  };

  static defaultProps = {
    maxWidth: '100%',
    shape: 'square',
  };

  render() {
    const {
      border,
      borderColor,
      children,
      height,
      maxWidth,
      onError,
      onLoad,
      shape,
      src,
      width,
      ...rest
    } = this.props;

    const style = {
      maxWidth,
      width: shape === 'circle' ? (width || height) : width,
      height: shape === 'circle' ? (width || height) : height,
    };

    const classes = classnames('ax-image', `ax-image--${shape}`, {
      [`ax-image--border-${border}`]: border,
      [`ax-image--border-color-${borderColor}`]: borderColor,
    });

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
            className={ classes }
            src={ src }
            style={ style } />
      </ImageFallback>
    );
  }
}
