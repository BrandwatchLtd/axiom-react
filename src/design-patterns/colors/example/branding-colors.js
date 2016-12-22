import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const brandColors = [
      'color-brand-pink',
      'color-brand-orange',
      'color-brand-amber',
      'color-brand-yellow',
      'color-brand-green',
      'color-brand-aqua',
      'color-brand-blue',
      'color-brand-purple',
      'color-brand-grey',
    ];

    return (
      <Example name="Branding">
        <ColorSwatch colors={ brandColors } />
      </Example>
    );
  }
}
