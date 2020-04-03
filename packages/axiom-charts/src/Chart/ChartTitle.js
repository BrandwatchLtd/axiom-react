import PropTypes from "prop-types";
import React, { Component } from "react";
import { Heading } from "@brandwatch/axiom-components";

export default class ChartTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Heading textSize="headtitle" {...rest}>
        {children}
      </Heading>
    );
  }
}
