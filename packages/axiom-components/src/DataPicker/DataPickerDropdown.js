import PropTypes from 'prop-types';
import { Component } from 'react';

export const DataPickerDropdownRef = 'DataPickerDropdown';

export default class DataPickerDropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = DataPickerDropdownRef;

  render() {
    return this.props.children || null;
  }
}
