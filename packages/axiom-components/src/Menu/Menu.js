import PropTypes from "prop-types";
import React, { Component } from "react";
import Base from "../Base/Base";
import MenuContext from "./MenuContext";
import "./Menu.css";

export default class Menu extends Component {
  static propTypes = {
    /** MenuItems */
    children: PropTypes.node,
    /** Size of the menu */
    size: PropTypes.oneOf(["medium", "large"]),
  };

  static defaultProps = {
    size: "large",
  };

  render() {
    const { children, size, ...rest } = this.props;

    return (
      <Base {...rest} Component="ul" className="ax-menu">
        <MenuContext.Provider value={size}>{children}</MenuContext.Provider>
      </Base>
    );
  }
}
