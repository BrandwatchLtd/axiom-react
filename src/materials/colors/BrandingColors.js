import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const brandColors = [
      'brand-rose',
      'brand-pink',
      'brand-purple',
      'brand-lilac',
      'brand-blue',
      'brand-teal',
      'brand-green',
      'brand-chartreuse',
      'brand-amber',
      'brand-orange',
      'brand-brown',
      'brand-grey',
    ];

    return (
      <Example name="Branding">
        { brandColors.map((brandColor) =>
          <ColorSwatch colors={ [
            `${brandColor}--dark`,
            `${brandColor}`,
            `${brandColor}--light`,
          ] } key={ brandColor }/>
        ) }

      </Example>
    );
  }
}
