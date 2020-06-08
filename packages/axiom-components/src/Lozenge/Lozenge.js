import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Base from "../Base/Base";
import EllipsisTooltip from "../EllipsisTooltip/EllipsisTooltip";
import StatusIndicator from "./StatusIndicator";

import "./Lozenge.css";

/**
 * Lozenges highlight an item's attributes or status so it can be recognized quickly.
 */
export default function Lozenge({
  className,
  size = "small",
  status = "none",
  children,
  color = "ui-carbon",
  ...rest
}) {
  const statusTypes = ["success", "warning", "error", "info", "loading"];
  const isStatusLozenge = statusTypes.includes(status);

  const classes = classnames(
    "ax-lozenge",
    className,
    `ax-lozenge--${size}`,
    `ax-lozenge--${status}`,
    `ax-lozenge--${color}`,
    { "ax-status-lozenge": isStatusLozenge }
  );

  return (
    <Base Component="span" className={classes} role="status" {...rest}>
      <EllipsisTooltip>
        {isStatusLozenge && <StatusIndicator status={status} />}
        {children}
      </EllipsisTooltip>
    </Base>
  );
}

Lozenge.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]),
  status: PropTypes.oneOf([
    "none",
    "success",
    "warning",
    "error",
    "info",
    "loading",
  ]),
  color: PropTypes.oneOf([
    "ui-carbon",
    "forbidden-planet",
    "tiny-clanger",
    "critical-mass",
    "fantastic-voyage",
    "paradise-lost",
    "serene-sea",
    "event-horizon",
    "electric-dreams",
    "outer-limits",
    "giant-leap",
    "moon-lagoon",
    "space-invader",
    "extraterrestrial",
    "terra-form",
    "primeval-soup",
    "future-shock",
    "sun-maker",
    "new-horizon",
    "blast-off",
    "crash-course",
    "solar-rust",
    "ground-control",
    "space-oddity",
    "rocky-planet",
    "deep-thought",
    "luna-dust",
    "sentiment-positive",
    "sentiment-negative",
    "sentiment-neutral",
    "social-twitter",
    "social-facebook",
    "social-instagram",
    "social-reddit",
    "social-youtube",
    "social-tumblr",
  ]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};
