import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import classnames from 'classnames';

export default class DialogBody extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** The main content side a Dialog that occupies most of the space */
    children: PropTypes.node,
    /** Class name to be appended to the element */
    className: PropTypes.string,
  };


  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames('ax-dialog__body', className);

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
