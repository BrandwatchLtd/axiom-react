import React, { Component, PropTypes } from 'react';
import { ContextMenu } from 'bw-axiom';

export default class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextMenu { ...rest }>
        { children }
      </ContextMenu>
    );
  }
}
