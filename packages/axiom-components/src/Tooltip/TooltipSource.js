import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const TooltipSourceRef = 'TooltipSource';

export default class TooltipSource extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = TooltipSourceRef;

  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, rest);
  }
}
