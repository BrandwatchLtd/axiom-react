import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';

export default class DialogBody extends Component {
  static propTypes = {
    /** The main content side a Dialog that occupies most of the space */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-dialog__body">
        { children }
      </Base>
    );
  }
}
