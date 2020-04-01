import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Color from './Color';

export default class ColorsDot extends Component {
  static propTypes = {
    rgb: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Color {...this.props}>
        <div
          className="si-color-dot"
          style={{ backgroundColor: `rgb(${Object.values(this.props.rgb)})` }}
        />
      </Color>
    );
  }
}
