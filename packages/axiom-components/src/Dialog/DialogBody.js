import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class DialogBody extends Component {
  static propTypes = {
    /** The main content side a Dialog that occupies most of the space */
    children: PropTypes.node,
     /** Padding size applied to the body area */
    padding: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static defaultProps = {
    padding: 'small',
  };

  render() {
    const { children, padding, ...rest } = this.props;

    const classes = classnames('ax-dialog__body',
      `ax-dialog__body--padding-${ padding }`
    );

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
