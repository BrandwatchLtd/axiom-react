import PropTypes from "prop-types";
import React, { Component } from "react";
import ChedioButtoxGroup from "./ChedioButtoxGroup";

export default class CheckBoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    const { children, ...rest } = this.props;

    return <ChedioButtoxGroup {...rest}>{children}</ChedioButtoxGroup>;
  }
}
