import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Context, DropdownMenu } from 'bw-axiom';

export default class DataPickerMenu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Context { ...rest }>
        <DropdownMenu>
          { children }
        </DropdownMenu>
      </Context>
    );
  }
}


