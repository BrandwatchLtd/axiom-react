import React, { Component } from "react";
import Text from "./Text";

export default class Paragraph extends Component {
  render() {
    return <Text space="x2" {...this.props} Component="p" />;
  }
}
