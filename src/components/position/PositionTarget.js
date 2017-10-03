import PropTypes from 'prop-types';
import { Component } from 'react';

export const PositionTargetRef = 'PositionTarget';

export default class PositionTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = PositionTargetRef;

  render() {
    return this.props.children;
  }
}
