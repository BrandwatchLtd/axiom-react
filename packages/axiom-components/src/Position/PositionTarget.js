import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const PositionTargetRef = 'PositionTarget';

export default class PositionTarget extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = PositionTargetRef;

  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, rest);
  }
}
