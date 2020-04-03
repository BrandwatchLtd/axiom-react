import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { Base } from "@brandwatch/axiom-components";

export default class ChartBody extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Horizontal alignment of content */
    horizontalAlign: PropTypes.oneOf(["start", "middle", "end"]),
    /** Vertical alignment of content */
    verticalAlign: PropTypes.oneOf([
      "start",
      "middle",
      "end",
      "around",
      "between",
    ]),
  };

  render() {
    const { children, horizontalAlign, verticalAlign, ...rest } = this.props;
    const classes = classnames("ax-chart__body", {
      [`ax-chart__body--horizontal-${horizontalAlign}`]: horizontalAlign,
      [`ax-chart__body--vertical-${verticalAlign}`]: verticalAlign,
    });

    return (
      <Base className={classes} {...rest}>
        {children}
      </Base>
    );
  }
}
