import React, { Component } from "react";
import Text from "./Text";

export default class Small extends Component {
  render() {
    return <Text {...this.props} Component="small" textSize="small" />;
  }
}
