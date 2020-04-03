import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Icon from "./Icon";
import "./Animicon.css";

export default class Animicon extends Component {
  static propTypes = {
    /** Toggle for the animation, when true the Icon will animate in */
    isIn: PropTypes.bool.isRequired,
    /** Name of the Icon to be animated */
    name: PropTypes.oneOf(["cross", "tick"]).isRequired,
  };

  render() {
    const { isIn, name, ...rest } = this.props;
    const classes = classnames(`ax-animicon--${name}`, {
      [`ax-animicon--${name}-in`]: isIn,
    });

    return <Icon {...rest} className={classes} name={name} />;
  }
}
