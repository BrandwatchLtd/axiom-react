import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Image from '../Image/Image';

export default class Avatar extends Component {
  static propTypes = {
    /** Border around the avatar */
    border: PropTypes.oneOf(['small', 'large']),
    /** Fallback content when the image fails to load */
    children: PropTypes.node,
    /** Size of the Avatar */
    size: PropTypes.string.isRequired,
    /** Source of the image */
    src: PropTypes.string,
  };

  static defaultProps = {
    border: 'small',
  };

  render() {
    const {
      border,
      children,
      size,
      src,
      ...rest
    } = this.props;

    return (
      <Image { ...rest }
          border={ border }
          height={ size }
          shape="circle"
          src={ src }
          width={ size }>
        { children }
      </Image>
    );
  }
}
