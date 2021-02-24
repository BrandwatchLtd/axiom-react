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
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /** Content for chip */
    children: PropTypes.node.isRequired,
    /** Disable interaction behaviour */
    disabled: PropTypes.bool,
    /** Apply invalid styling */
    invalid: PropTypes.bool,
    /** Name of the Icon located to the left of the main content */
    leftIcon: PropTypes.string,
    /** Metric content */
    metric: PropTypes.string,
    /** Name of the Icon located to the right of the main content or metric */
    rightIcon: PropTypes.string,
    /** Size of the chip */
    size: PropTypes.oneOf(["small", "medium", "large", "huge"]),
    /** Apply valid styling */
    valid: PropTypes.bool,
  };

  static defaultProps = {
    size: "medium",
  };

  render() {
    const {
      active,
      children,
      disabled,
      invalid,
      leftIcon,
      metric,
      rightIcon,
      size,
      valid,
      className,
      ...rest
    } = this.props;

    const classes = classnames("ax-chip", `ax-chip--${size}`, className, {
      "ax-chip--active": active,
      "ax-chip--valid": valid,
      "ax-chip--invalid": invalid,
    });

    return (
      <Base className={classes} disabled={disabled} {...rest}>
        {leftIcon && (
          <Icon
            className={"ax-chip-icon"}
            name={leftIcon}
            color={active ? "ui-accent" : null}
          />
        )}
        <Base className="ax-chip-label">{children}</Base>
        {metric && <Base className={"ax-chip-metric"}> {metric}</Base>}
        {rightIcon && <Icon className={"ax-chip-icon"} name={rightIcon} />}
      </Base>
    );
  }
}
