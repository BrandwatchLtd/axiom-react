import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropdownMenuItem } from 'bw-axiom';

export default class DataPickerMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <DropdownMenuItem { ...rest }>
        { children }
      </DropdownMenuItem>
    );
  }
}
