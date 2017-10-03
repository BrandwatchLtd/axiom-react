import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const TooltipContentRef = 'TooltipContent';

export default class TooltipContent extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = TooltipContentRef;

  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, rest);
  }
}
