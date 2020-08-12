import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import omit from "lodash.omit";
import Base from "../Base/Base";
import "./Card.css";
export default function Card({
  active,
  border,
  borderRadius = "small",
  children,
  className,
  hover,
  onClick,
  shade = "shade-1",
  shadow,
  size = "medium",
  ...rest
}) {
  const classes = classnames(
    "ax-card",
    `ax-card--size-${size}`,
    {
      "ax-card--active": active,
      "ax-card--border": border,
      "ax-card--clickable": onClick,
      "ax-card--hover": hover,
      [`ax-card--${shade}`]: shade,
      [`ax-card--border-radius-${borderRadius}`]: borderRadius,
      "ax-card--shadow": shadow,
    },
    className
  );

  return (
    <Base
      {...omit(rest, ["cardListStyle"])}
      className={classes}
      onClick={onClick}
    >
      {children}
    </Base>
  );
}

Card.propTypes = {
  /** Applies styling to indicate the Card is in an active state */
  active: PropTypes.bool,
  /** Applies border styling */
  border: PropTypes.bool,
  /** Applies border radius */
  borderRadius: PropTypes.oneOf(["small", "large"]),
  /** SKIP */
  cardListStyle: PropTypes.oneOf(["divided", "seamless", "separate"]),
  /** Content to be inserted inside the Card */
  children: PropTypes.node.isRequired,
  /** Class name to be appended to the element */
  className: PropTypes.string,
  /** Applies styling to indicate the Card is in an hovered state */
  hover: PropTypes.bool,
  /** When provided, applies styling to indicate the Card is clickable */
  onClick: PropTypes.func,
  /** Shade of the background color */
  shade: PropTypes.oneOf(["shade-1", "shade-2", "shade-3", "shade-4"]),
  /** Applies a shadow to the card */
  shadow: PropTypes.bool,
  /** Increases/decreases the size of the card */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
