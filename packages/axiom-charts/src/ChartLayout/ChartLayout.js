import React, { Component } from "react";
import { Base } from "@brandwatch/axiom-components";
import "./ChartLayout.css";

export default class ChartLayout extends Component {
  render() {
    return <Base {...this.props} className="ax-chart-layout" />;
  }
}
