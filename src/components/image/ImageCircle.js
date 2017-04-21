import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Icon, Image, ImageFallback } from 'bw-axiom';
import './ImageCircle.css';

export default class ImageCircle extends Component {
  static propTypes = {
    border: PropTypes.oneOf(['small', 'large']),
    children: PropTypes.node,
    overlayIconName: PropTypes.string,
    overlayIconSize: PropTypes.string,
    size: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onError: PropTypes.func,
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
          src={ src }>
        <Base className={ classes } style={ style }>
          <div className="ax-image-circle__image">
            <Image { ...rest }
                src={ src }
                style={ { width: '100%' } } />
          </div>

          { do { if (overlayIconName) {
            <div className="ax-image-circle__icon">
              <Icon name={ overlayIconName } size={ overlayIconSize } />
            </div>;
          } } }
        </Base>
      </ImageFallback>
    );
  }
}
