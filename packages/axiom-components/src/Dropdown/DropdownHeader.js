import React, { Component } from "react";
import ContextContent from "../Context/ContextContent";

export default class DropdownHeader extends Component {
  render() {
    return (
      <ContextContent
        {...this.props}
        hasFullSeparator
        paddingVertical="medium"
      />
    );
  }
}
