import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button/Button";

export const TextInputButtonRef = "TextInputButton";

export default class TextInputButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
  };

  static typeRef = TextInputButtonRef;

  render() {
    const { children, size, ...rest } = this.props;
    return (
      <span className="ax-input__button">
        <Button {...rest} joinedLeft size={size}>
          {children}
        </Button>
      </span>
    );
  }
}
