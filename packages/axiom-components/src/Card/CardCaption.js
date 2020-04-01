import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class CardCaption extends Component {
  static propTypes = {
    /** Content that appears in the caption of an image */
    children: PropTypes.node.isRequired,
    /** Class name to be appended to the element */
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames('ax-card__caption', className);

    return (
      <Base {...rest} className={classes}>
        {children}
      </Base>
    );
  }
}
