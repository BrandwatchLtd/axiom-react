import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ContextMenu } from 'bw-axiom';

export default class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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
