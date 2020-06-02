import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Lozenge from "./Lozenge";

import "./Lozenge.css";

export default function LozengeGroup({ children }) {
  const classes = classnames("ax-lozenge-group");
  return <div className={classes}>{children}</div>;
}

LozengeGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
