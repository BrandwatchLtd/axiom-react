import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Base from "../Base/Base";
import Progress from "../Progress/Progress";

import "./Lozenge.css";

export default function StatusIndicator({ status }) {
  const indicatorClasses = classnames(
    "ax-status-lozenge__indicator",
    `ax-status-lozenge__indicator--${status}`
  );

  if (status === "loading") {
    return <Progress className={indicatorClasses} aria-label={status} />;
  }

  return <Base className={indicatorClasses} aria-label={status} />;
}

StatusIndicator.propTypes = {
  status: PropTypes.oneOf([
    "none",
    "success",
    "warning",
    "error",
    "info",
    "loading",
  ]),
};
