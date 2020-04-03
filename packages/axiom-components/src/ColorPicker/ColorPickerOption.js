import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import "./ColorPickerOption.css";

export default class ColorPickerOption extends Component {
  static propTypes = {
    color: PropTypes.oneOf([
      "forbidden-planet",
      "tiny-clanger",
      "critical-mass",
      "fantastic-voyage",
      "paradise-lost",
      "serene-sea",
      "event-horizon",
      "electric-dreams",
      "outer-limits",
      "giant-leap",
      "moon-lagoon",
      "space-invader",
      "extraterrestrial",
      "terra-form",
      "primeval-soup",
      "future-shock",
      "sun-maker",
      "new-horizon",
      "blast-off",
      "crash-course",
      "solar-rust",
      "ground-control",
      "space-oddity",
      "rocky-planet",
      "deep-thought",
      "luna-dust",
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.boundHandleClick = this.handleClick.bind(this);
  }

  static contextTypes = {
    closeDropdown: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    size: ".75rem",
  };

  handleClick(...args) {
    const { closeDropdown } = this.context;
    const { disabled, onClick } = this.props;

    if (closeDropdown && !disabled) {
      closeDropdown();
    }

    if (onClick) {
      onClick(...args);
    }
  }

  render() {
    const { color = "empty", disabled, onClick, size, ...rest } = this.props;
    const classes = classnames(
      "ax-color-picker__option",
      `ax-color-picker__option--${color}`,
      {
        "ax-color-picker__option--clickable": onClick && !disabled,
        "ax-color-picker__option--disabled": disabled,
      }
    );

    return (
      <Base
        {...rest}
        className={classes}
        onClick={this.boundHandleClick}
        style={{ height: size, width: size }}
      />
    );
  }
}
