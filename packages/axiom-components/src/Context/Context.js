import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import ContextTip from "./ContextTip";
import "./Context.css";

/**
 * Context provides styling elevating itself from the background.
 *
 * You normally won't need Context, consider if [Tooltip](/docs/tooltip--default) or [Dropdown](/docs/dropdown--default-story)  meet your needs first.
 * Context is a building block used within Axiom you can use it in combination with [Position](/docs/position--default) to create custom popups.
 */
export default class Context extends Component {
  static propTypes = {
    arrowRef: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([
      "success",
      "warning",
      "error",
      "info",
      "carbon",
      "white",
    ]),
    maxHeight: PropTypes.string,
    /* passed to context tip to decide direction of arrow */
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    width: PropTypes.string,
  };

  static defaultProps = {
    maxHeight: "30rem",
    position: "top",
    width: "14.5rem",
  };

  render() {
    const {
      className,
      arrowRef,
      children,
      maxHeight,
      position,
      width,
      color,
      ...rest
    } = this.props;

    const classes = classnames(className, "ax-context", {
      [`ax-context--${color}`]: color,
    });
    const content = () => (
      <div className="ax-context__content" style={{ maxHeight }}>
        {children}
      </div>
    );
    return (
      <Base theme="day" {...rest} className={classes} style={{ width }}>
        {arrowRef ? (
          <ContextTip color={color} direction={position} ref={arrowRef}>
            {content()}
          </ContextTip>
        ) : (
          content()
        )}
      </Base>
    );
  }
}
