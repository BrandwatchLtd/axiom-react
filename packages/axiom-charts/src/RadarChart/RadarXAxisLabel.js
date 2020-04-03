import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { Link, Text } from "@brandwatch/axiom-components";

const RADIAN = Math.PI / 180;

export default class RadarXAxisLabel extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    r: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  render() {
    const { active, children: label, onClick, r, x, y, ...rest } = this.props;

    const isTop = r > RADIAN * 247.5 || r < RADIAN * -67.5;
    const isRight = r >= RADIAN * -67.5 && r <= RADIAN * 67.5;
    const isBottom = r > RADIAN * 67.5 && r < RADIAN * 112.5;
    const isLeft = r >= RADIAN * 112.5 && r <= RADIAN * 247.5;

    const classes = classnames("ax-radar__x-axis-label", {
      "ax-radar__x-axis-label--right": isRight,
      "ax-radar__x-axis-label--bottom": isBottom,
      "ax-radar__x-axis-label--left": isLeft,
      "ax-radar__x-axis-label--top": isTop,
    });

    return (
      <div
        {...rest}
        className={classes}
        style={{ top: `${y}px`, left: `${x}px` }}
      >
        {onClick ? (
          <Link
            onClick={() => onClick(label)}
            style={active ? "body" : "subtle"}
          >
            {label}
          </Link>
        ) : (
          <Text textColor={active ? "body" : "subtle"}>{label}</Text>
        )}
      </div>
    );
  }
}
