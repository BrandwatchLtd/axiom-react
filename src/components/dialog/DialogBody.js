import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';

export default class DialogBody extends Component {
  static propTypes = {
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
