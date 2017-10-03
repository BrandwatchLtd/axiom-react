import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const DropdownContentRef = 'DropdownContent';

export default class DropdownContent extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = DropdownContentRef;

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, rest);
  }
}
