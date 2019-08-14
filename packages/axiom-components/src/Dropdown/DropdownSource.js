import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';
import DropdownReactContext from './DropdownReactContext';

export const DropdownSourceRef = 'DropdownSource';

export default class DropdownSource extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextType = DropdownReactContext;

  static typeRef = DropdownSourceRef;

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onRequestCloseDropdown: this.context.closeDropdown,
    });
  }
}
