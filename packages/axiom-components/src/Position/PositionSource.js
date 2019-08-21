import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const PositionSourceRef = 'PositionSource';

export default class PositionSource extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = PositionSourceRef;

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, rest);
  }
}
