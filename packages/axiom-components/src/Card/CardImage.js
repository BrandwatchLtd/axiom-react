import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Image from '../Image/Image';

export default class CardImage extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Content to be inserted inside the Image, ideally the Caption */
    children: PropTypes.node,
    /** Class name to be appended to the element */
    className: PropTypes.string,
  }

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames('ax-card__image', className);

    return (
      <Base className={ classes }>
        <Image space="x0" { ...rest } />
        { children }
      </Base>
    );
  }
}
