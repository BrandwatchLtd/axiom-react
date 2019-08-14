import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownMenu from '../Dropdown/DropdownMenu';

export default class SelectOptionGroup extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <DropdownMenu { ...rest } >
        { children }
      </DropdownMenu>
    );
  }
}
