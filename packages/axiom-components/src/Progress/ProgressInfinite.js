import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { getArcProperties } from "./utils";
import renderFilter from "./_filter";
import RadialProgress from "./RadialProgress";
import "./ProgressInfinite.css";

export default class ProgressInfinite extends Component {
  static propTypes = {
    /** Color of the indicator */
    color: PropTypes.oneOf(["subtle", "white"]),
    /** Size of the indicator */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /** Size in REM units */
    sizeRem: PropTypes.string,
  };

  static defaultProps = {
    color: "subtle",
    size: "small",
  };

  componentDidMount = renderFilter;

  render() {
    const { color, ...rest } = this.props;
    const classes = classnames(
      "ax-progress-infinite",
      `ax-progress-infinite--${color}`
    );
    const {
      diameter,
      innerRadius,
      strokeWidth,
      strokeDasharray,
      strokeDashoffset,
    } = getArcProperties({ percent: 75 });

    return (
      <RadialProgress {...rest} className={classes} diameter={diameter}>
        <circle
          className="ax-progress-infinite__arc"
          r={innerRadius}
          style={{
            stroke: `url(#ax-progress-infinite__filter--${color})`,
            strokeDasharray,
            strokeDashoffset,
            strokeWidth,
          }}
        />
      </RadialProgress>
    );
  }
}
