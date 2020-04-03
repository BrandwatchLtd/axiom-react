import PropTypes from "prop-types";
import { Component, cloneElement } from "react";
import DropdownReactContext from "./DropdownReactContext";

export const DropdownSourceRef = "DropdownSource";

export default class DropdownSource extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextType = DropdownReactContext;

  static typeRef = DropdownSourceRef;

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onRequestCloseDropdown: this.context.closeDropdown,
    });
  }
}
