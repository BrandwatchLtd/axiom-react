import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';
import brandColors from '../brandColors';

export default class ColorsExample extends Component {
  render() {
    const colors = brandColors.map(color => `brand-${color}`);

    return (
      <Example name="Branding">
        { colors.map((brandColor) =>
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
