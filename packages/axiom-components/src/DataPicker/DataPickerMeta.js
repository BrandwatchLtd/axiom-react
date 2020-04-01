import PropTypes from 'prop-types';
import { Component } from 'react';

export const DataPickerMetaRef = 'DataPickerMeta';

export default class DataPickerMeta extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = DataPickerMetaRef;

  render() {
    return this.props.children || null;
  }
}
