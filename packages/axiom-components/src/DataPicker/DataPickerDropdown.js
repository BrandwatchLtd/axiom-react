import PropTypes from 'prop-types';
import { Component } from 'react';

export const DataPickerDropdownRef = 'DataPickerDropdown';

export default class DataPickerDropdown extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = DataPickerDropdownRef;

  render() {
    return this.props.children || null;
  }
}
