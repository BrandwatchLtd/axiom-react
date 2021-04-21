import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import "./Link.css";

export default class Link extends Component {
  static propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
      "body",
      "day",
      "inherit",
      "mono",
      "night",
      "normal",
      "subtle",
    ]),
  };

  static defaultProps = {
    Component: "a",
    variant: "normal",
  };

  render() {
    const { className, children, Component, variant, ...rest } = this.props;
    const classes = classnames("ax-link", className, {
      [`ax-link--variant-${variant}`]: variant,
    });

    return (
      <Base {...rest} Component={Component} className={classes}>
        {children}
      </Base>
    );
  }
}
