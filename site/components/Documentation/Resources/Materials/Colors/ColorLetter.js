import PropTypes from "prop-types";
import React, { Component } from "react";
import Color from "./Color";

export default class ColorsLetter extends Component {
  static propTypes = {
    rgb: PropTypes.object.isRequired,
  };

  render() {
    const { r, g, b, a = 1 } = this.props.rgb;

    return (
      <Color {...this.props}>
        <div
          className="si-color-letter"
          style={{ color: `rgba(${r},${g},${b},${a})` }}
        >
          a
        </div>
      </Color>
    );
  }
}
