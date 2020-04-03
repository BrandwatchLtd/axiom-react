import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { Base } from "@brandwatch/axiom-components";

export default class SitePage extends Component {
  static propTypes = {
    horizontalPadding: PropTypes.bool,
    verticalPadding: PropTypes.bool,
  };

  static defaultProps = {
    horizontalPadding: true,
    verticalPadding: true,
  };

  render() {
    const { horizontalPadding, verticalPadding, ...rest } = this.props;
    const classes = classnames("si-site__page", {
      "si-site__page--h": horizontalPadding,
      "si-site__page--v": verticalPadding,
    });

    return <Base {...rest} className={classes} />;
  }
}
