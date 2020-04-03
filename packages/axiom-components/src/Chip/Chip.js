import PropTypes from "prop-types";
import React, { Component } from "react";
import Base from "../Base/Base";
import Icon from "../Icon/Icon";
import classnames from "classnames";
import "./Chip.css";

export default class Chip extends Component {
  static propTypes = {
    /** Apply active styling */
    active: PropTypes.bool,
    /** Content for chip */
    children: PropTypes.node.isRequired,
    /** Disable interaction behaviour */
    disabled: PropTypes.bool,
    /** Name of the Icon located to the left of the main content */
    leftIcon: PropTypes.string,
    /** Metric content */
    metric: PropTypes.string,
    /** Name of the Icon located to the right of the main content or metric */
    rightIcon: PropTypes.string,
    /** Size of the chip */
    size: PropTypes.oneOf(["small", "medium", "large", "huge"]),
  };

  static defaultProps = {
    size: "medium",
  };

  render() {
    const {
      active,
      children,
      disabled,
      leftIcon,
      metric,
      rightIcon,
      size,
      ...rest
    } = this.props;

    const classes = classnames("ax-chip", `ax-chip--${size}`, {
      "ax-chip--active": active,
    });

    const metricClasses = classnames("ax-chip-metric", {
      "ax-chip-metric--light": active,
    });

    return (
      <Base className={classes} disabled={disabled} {...rest}>
        {leftIcon && <Icon className={"ax-chip-icon"} name={leftIcon} />}
        <Base className="ax-chip-label">{children}</Base>
        {metric && <Base className={metricClasses}> {metric}</Base>}
        {rightIcon && <Icon className={"ax-chip-icon"} name={rightIcon} />}
      </Base>
    );
  }
}
