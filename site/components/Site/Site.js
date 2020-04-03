import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router";
import Documentation from "../Documentation/Documentation";
import "./Site.css";

class Site extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Switch>
        <Route component={Documentation} path="/" />
      </Switch>
    );
  }
}

export default withRouter(Site);
