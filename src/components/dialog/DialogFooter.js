import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class DialogFooter extends Component {
  static propTypes = {
    /** Footer content inside the Dialog, a good place for some buttons */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-dialog__footer">
        { children }
      </Base>
    );
  }
}
