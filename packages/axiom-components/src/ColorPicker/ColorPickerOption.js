import PropTypes from "prop-types";
import React, { useContext } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import "./ColorPickerOption.css";
import DropdownReactContext from "../Dropdown/DropdownReactContext";

export default function ColorPickerOption({
  color = "empty",
  disabled = false,
  onClick,
  size = ".75rem",
  ...rest
}) {
  const { closeDropdown } = useContext(DropdownReactContext);

  function handleClick(...args) {
    if (closeDropdown && !disabled) {
      closeDropdown();
    }

    if (onClick) {
      onClick(...args);
    }
  }

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
      onClick={handleClick}
      style={{ height: size, width: size }}
    />
  );
}

ColorPickerOption.propTypes = {
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
