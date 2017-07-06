import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageCircle } from 'bw-axiom';

export default class Avatar extends Component {
  static propTypes = {
    /** Border around the avatar */
    border: PropTypes.oneOf(['small', 'large']),
    /** Fallback content when the image fails to load */
    children: PropTypes.node,
    /** Overall size of the image, including any border that is given */
    size: PropTypes.string.isRequired,
    /** Source of the image */
    src: PropTypes.string,
  };

  render() {
    const { border, children, size, src, ...rest } = this.props;

    return (
      <ImageCircle { ...rest }
          border={ border }
          size={ size }
          src={ src }>
        { children }
      </ImageCircle>
    );
  }
}
