import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Icon, Image } from 'bw-axiom';
import './ImageCircle.css';

export default class ImageCircle extends Component {
  static propTypes = {
    border: PropTypes.oneOf(['small', 'large']),
    overlayIconName: PropTypes.string,
    overlayIconSize: PropTypes.string,
    size: PropTypes.string.isRequired,
  };

  render() {
    const { border, overlayIconName, overlayIconSize, size, ...rest } = this.props;
    const style = { height: size, width: size };
    const classes = classnames('ax-image-circle', {
      [`ax-image-circle--border-${border}`]: border,
    });

    return (
      <Base className={ classes } style={ style }>
        <div className="ax-image-circle__image">
          <Image { ...rest } style={ { width: '100%' } } />
        </div>

        { do { if (overlayIconName) {
          <div className="ax-image-circle__icon">
            <Icon name={ overlayIconName } size={ overlayIconSize } />
          </div>;
        } } }
      </Base>
    );
  }
}
