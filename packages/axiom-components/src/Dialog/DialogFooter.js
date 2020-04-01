import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class DialogFooter extends Component {
  static propTypes = {
    /** Footer content inside the Dialog, a good place for some buttons */
    children: PropTypes.node,
    /** Class name to be appended to the element */
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames('ax-dialog__footer', className);

    return (
      <Base {...rest} className={classes}>
        {children}
      </Base>
    );
  }
}
