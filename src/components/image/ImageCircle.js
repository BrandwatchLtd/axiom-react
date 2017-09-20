import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import Icon from '../icon/Icon';
import Image from './Image';
import ImageFallback from './ImageFallback';
import './ImageCircle.css';

export default class ImageCircle extends Component {
  static propTypes = {
    /** Border applied around the image */
    border: PropTypes.oneOf(['small', 'large']),
    /** Fallback content when the image fails to load */
    children: PropTypes.node,
    /** Name of the icon to be added to the hover overlay */
    overlayIconName: PropTypes.string,
    /** Size of the icon to be added to the hover overlay */
    overlayIconSize: PropTypes.string,
    /** Size (with unit) that will be applied to the width and height of the image */
    size: PropTypes.string.isRequired,
    /** Source of the image */
    src: PropTypes.string,
    /** SKIP */
    onError: PropTypes.func,
    /** SKIP */
    onLoad: PropTypes.func,
  };

  render() {
    const {
      border,
      children,
      overlayIconName,
      overlayIconSize,
      size,
      src,
      onError,
      onLoad,
      ...rest
    } = this.props;

    const style = { height: size, width: size };
    const classes = classnames('ax-image-circle', {
      [`ax-image-circle--border-${border}`]: border,
    });

    return (
      <ImageFallback
          fallback={ children }
          onError={ onError }
          onLoad={ onLoad }
          src={ src }>
        <Base className={ classes } style={ style }>
          <div className="ax-image-circle__image">
            <Image { ...rest }
                src={ src }
                style={ { width: '100%' } } />
          </div>

          { overlayIconName && (
            <div className="ax-image-circle__icon">
              <Icon name={ overlayIconName } size={ overlayIconSize } />
            </div>
          ) }
        </Base>
      </ImageFallback>
    );
  }
}
