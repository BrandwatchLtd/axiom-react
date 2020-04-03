import PropTypes from "prop-types";
import { Component, cloneElement } from "react";

export const PositionTargetRef = "PositionTarget";

export default class PositionTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = PositionTargetRef;

  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, rest);
  }
}
