import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const brandColors = [
      'color-brand-rose',
      'color-brand-pink',
      'color-brand-purple',
      'color-brand-lilac',
      'color-brand-blue',
      'color-brand-teal',
      'color-brand-green',
      'color-brand-chartreuse',
      'color-brand-amber',
      'color-brand-orange',
      'color-brand-brown',
      'color-brand-grey',
    ];

    return (
      <Example name="Branding">
        <ColorSwatch colors={ brandColors } />
      </Example>
    );
  }
}
