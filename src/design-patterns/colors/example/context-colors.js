import React, { Component } from 'react';
import { ColorSwatch, Example } from 'style-guide';
import { Heading, getCSSVar } from 'bw-axiom';

export default class PaletteColors extends Component {
  render() {
    const palette = [{
      name: 'Primary',
      colors: [
        { variable: 'color-primary-0', hex: getCSSVar('color-primary-0') },
        { variable: 'color-primary-1', hex: getCSSVar('color-primary-1') },
        { variable: 'color-primary-2', hex: getCSSVar('color-primary-2') },
      ],
    }];

    return (
      <Example name="Context Colors">
        { palette.map(({ name, colors }, index) => [
          <Heading key={ `${index}-heading` }>{ name }</Heading>,
          <ColorSwatch colors={ colors } key={ `${index}-swatch` } />,
        ]) }
      </Example>
    );
  }
}
