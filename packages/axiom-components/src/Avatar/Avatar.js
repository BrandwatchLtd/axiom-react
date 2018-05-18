import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Image from '../Image/Image';

export default class Avatar extends Component {
  static propTypes = {
    /** Border size around the avatar */
    border: PropTypes.oneOf(['small', 'large']),
    /** Border colour around the avatar */
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
      borderColor,
      children,
      size,
      src,
      ...rest
    } = this.props;

    return (
      <Image { ...rest }
          border={ border }
          borderColor={ borderColor }
          height={ size }
          shape="circle"
          src={ src }
          width={ size }>
        { children }
      </Image>
    );
  }
}
