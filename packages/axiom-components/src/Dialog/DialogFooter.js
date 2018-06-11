import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class DialogFooter extends Component {
  static propTypes = {
    /** Footer content inside the Dialog, a good place for some buttons */
    children: PropTypes.node,
    /** Padding size applied to the footer area */
    padding: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static defaultProps = {
    padding: 'small',
  };

  render() {
    const { children, padding, ...rest } = this.props;

    const classes = classnames('ax-dialog__footer',
      `ax-dialog__footer--padding-${ padding }`
    );

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
