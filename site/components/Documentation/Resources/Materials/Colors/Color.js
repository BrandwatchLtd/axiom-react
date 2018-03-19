import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, GridCell } from '@brandwatch/axiom-components';

const to16 = (n, ns = n.toString(16)) => (`00${ns}`).substring(ns.length);
const rgbToHex = ({ r, g, b }) => `#${to16(r)}${to16(g)}${to16(b)}`;

export default class Color extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    rgb: PropTypes.shape({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
      a: PropTypes.number,
    }).isRequired,
  };

  render() {
    const { children, name, rgb, ...rest } = this.props;

    return (
      <GridCell { ...rest }
          textCenter
          textColor="subtle"
          textSize="small"
          textStrong>
        <Base space="x1">{ children }</Base>
        <Base textCase="upper">{ rgbToHex(rgb) }</Base>
        { name && (
          <Base>
            { name } { rgb.a !== undefined ? `${rgb.a * 100}%` : null }
          </Base>
        ) }
      </GridCell>
    );
  }
}
