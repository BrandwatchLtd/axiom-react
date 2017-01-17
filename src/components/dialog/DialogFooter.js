import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class DialogFooter extends Component {
  static propTypes = {
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
