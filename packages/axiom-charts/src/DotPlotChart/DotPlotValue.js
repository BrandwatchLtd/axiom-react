import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { Base, Small } from "@brandwatch/axiom-components";

export default class DotPlotValue extends Component {
  static propTypes = {
    dotPlotLabel: PropTypes.func,
    hidden: PropTypes.bool,
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
  };

  render() {
    const { hidden, value, dotPlotLabel, x, ...rest } = this.props;
    const classes = classnames("ax-dot-plot__value", {
      "ax-dot-plot__value--hidden": hidden,
    });

    const getLabel = () => {
      if (dotPlotLabel) {
        return dotPlotLabel({ value });
      }

      return value;
    };

    return (
      <Base {...rest} className={classes} style={{ left: `${x}%` }}>
        <Small>{getLabel()}</Small>
      </Base>
    );
  }
}
