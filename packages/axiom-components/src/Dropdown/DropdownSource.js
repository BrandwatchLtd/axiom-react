import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import DropdownReactContext from './DropdownReactContext';

export const DropdownSourceRef = 'DropdownSource';

export default class DropdownSource extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = DropdownSourceRef;

  render() {
    const { children, ...rest } = this.props;

    return (
      <DropdownReactContext.Consumer>
        { context =>
          cloneElement(children, {
            ...rest,
            onRequestCloseDropdown: context.closeDropdown,
            closeDropdown: context.closeDropdown,
            dropdownRef: context.dropdownRef,
          })
        }
      </DropdownReactContext.Consumer>
    );
  }
}
