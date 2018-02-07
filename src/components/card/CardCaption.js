import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class CardCaption extends Component {
  static propTypes = {
    /** Content that appears in the caption of an image */
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-card__caption">
        { children }
      </Base>
    );
  }
}
