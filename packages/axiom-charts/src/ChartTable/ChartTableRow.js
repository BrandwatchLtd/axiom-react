import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { Base } from "@brandwatch/axiom-components";

export default class ChartTableRow extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    hover: PropTypes.bool,
  };

  render() {
    const { children, hover, ...rest } = this.props;
    const classes = classnames("ax-chart-table__row", {
      "ax-chart-table__row--hover": hover,
    });

    return (
      <Base {...rest} className={classes}>
        {children}
      </Base>
    );
  }
}
