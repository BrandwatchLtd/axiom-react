import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Image from '../Image/Image';

export default class CardImage extends Component {
  static propTypes = {
    /** Content to be inserted inside the Image, ideally the Caption */
    children: PropTypes.node,
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base className="ax-card__image">
        <Image space="x0" { ...rest } />
        { children }
      </Base>
    );
  }
}
