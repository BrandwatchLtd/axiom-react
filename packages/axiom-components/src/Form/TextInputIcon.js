import PropTypes from "prop-types";
import React, { Component } from "react";
import TextInputIconWrapper from "./TextInputIconWrapper";
import Icon from "../Icon/Icon";

export const TextInputIconRef = "TextInputIcon";

export default class TextInputIcon extends Component {
  static propTypes = {
    /** Alignment inside the input field */
    align: PropTypes.oneOf(["left", "right"]),
    /** Color of the TextInputIcon. */
    iconColor: PropTypes.string,
    /** Name of the icon. See <Icon>. */
    name: PropTypes.string.isRequired,
    /** Click handler, applies styling to indicate it is clickable. */
    onClick: PropTypes.func,
    /** Optional tooltip for the icon. */
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };

  static typeRef = TextInputIconRef;

  render() {
    const { align, iconColor, name, onClick, tooltip, ...rest } = this.props;

    return (
      <TextInputIconWrapper
        align={align}
        onClick={onClick}
        tooltip={tooltip}
        {...rest}
      >
        <Icon name={name} textColor={iconColor} size="1rem" />
      </TextInputIconWrapper>
    );
  }
}
