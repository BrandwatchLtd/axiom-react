import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextMenu from '../Context/ContextMenu';

export default class DropdownMenu extends Component {
  static propTypes = {
    /** DropdownMenuItems */
    children: PropTypes.node.isRequired,
    paddingVertical: PropTypes.oneOf(['none', 'medium']),
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
