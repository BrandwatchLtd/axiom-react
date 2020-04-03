import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button/Button";
import ButtonIcon from "../Button/ButtonIcon";

const sizeMap = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
  huge: "5rem",
};

export default class IconButton extends Component {
  static propTypes = {
    /** Style of the Button, which affects its coloring and sizing */
    buttonStyle: PropTypes.oneOf([
      "primary",
      "secondary",
      "tertiary",
      "quaternary",
    ]),
    /** Color of the icon */
    iconColor: PropTypes.oneOf([
      "body",
      "day",
      "night",
      "error",
      "success",
      "warning",
      "disabled",
      "subtle",
      "twitter",
      "facebook",
      "instagram",
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
      "sentiment-negative",
      "sentiment-positive",
      "sentiment-neutral",
      "ui-accent",
    ]),
    /** Name of the icon that will be displayed */
    name: PropTypes.string.isRequired,
    /** Size of the button and icon */
    size: PropTypes.oneOf(["small", "medium", "large", "huge"]),
  };

  static defaultProps = {
    size: "medium",
    buttonStyle: "secondary",
  };

  render() {
    const { name, size, buttonStyle, iconColor, ...rest } = this.props;

    return (
      <Button {...rest} shape="circle" size={size} style={buttonStyle}>
        <ButtonIcon color={iconColor} name={name} size={sizeMap[size]} />
      </Button>
    );
  }
}
