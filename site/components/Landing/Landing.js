import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Landing extends Component {
  render() {
    return <Redirect to="/docs/packages/" />;
  }
}
