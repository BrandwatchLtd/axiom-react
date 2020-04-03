import PropTypes from "prop-types";
import { Component, cloneElement } from "react";

export const TooltipSourceRef = "TooltipSource";

export default class TooltipSource extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static typeRef = TooltipSourceRef;

  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, rest);
  }
}
