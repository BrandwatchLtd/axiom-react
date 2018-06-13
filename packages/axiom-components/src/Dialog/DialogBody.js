import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class DialogBody extends Component {
  static propTypes = {
    /** The main content side a Dialog that occupies most of the space */
    children: PropTypes.node,
    /** Controls if body should be rendered with "display:flex;" */
    flex: PropTypes.bool,
  };

  render() {
    const { children, flex, ...rest } = this.props;

    const classes = classnames('ax-dialog__body', {
      'ax-dialog__body--flex': flex,
    });
    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
