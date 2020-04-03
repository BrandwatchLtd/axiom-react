import PropTypes from "prop-types";
import React, { Component } from "react";
import { Base } from "@brandwatch/axiom-components";

export default class ChartHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base className="ax-chart__header" {...rest}>
        {children}
      </Base>
    );
  }
}
