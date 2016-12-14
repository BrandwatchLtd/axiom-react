import React, { Component } from 'react';
import { ColorSwatch, Example } from 'style-guide';
import { Heading, getCSSVar } from 'bw-axiom';

export default class PaletteColors extends Component {
  render() {
    const palette = [{
      name: 'White',
      colors: [
        { variable: 'color-white-0', hex: getCSSVar('color-white-0') },
      ],
    }, {
      name: 'Black',
      colors: [
        { variable: 'color-black-0', hex: getCSSVar('color-black-0') },
      ],
    }, {
      name: 'Grey',
      colors: [
        { variable: 'color-grey-0', hex: getCSSVar('color-grey-0') },
        { variable: 'color-grey-1', hex: getCSSVar('color-grey-1') },
        { variable: 'color-grey-2', hex: getCSSVar('color-grey-2') },
        { variable: 'color-grey-3', hex: getCSSVar('color-grey-3') },
        { variable: 'color-grey-4', hex: getCSSVar('color-grey-4') },
        { variable: 'color-grey-5', hex: getCSSVar('color-grey-5') },
        { variable: 'color-grey-6', hex: getCSSVar('color-grey-6') },
        { variable: 'color-grey-7', hex: getCSSVar('color-grey-7') },
        { variable: 'color-grey-8', hex: getCSSVar('color-grey-8') },
        { variable: 'color-grey-9', hex: getCSSVar('color-grey-9') },
        { variable: 'color-grey-10', hex: getCSSVar('color-grey-10') },
        { variable: 'color-grey-11', hex: getCSSVar('color-grey-11') },
      ],
    }, {
      name: 'Red',
      colors: [
        { variable: 'color-red-0', hex: getCSSVar('color-red-0') },
      ],
    }, {
      name: 'Pink',
      colors: [
        { variable: 'color-pink-0', hex: getCSSVar('color-pink-0') },
      ],
    }, {
      name: 'Orange',
      colors: [
        { variable: 'color-orange-0', hex: getCSSVar('color-orange-0') },
      ],
    }, {
      name: 'Orange (light)',
      colors: [
        { variable: 'color-orange-light-0', hex: getCSSVar('color-orange-light-0') },
      ],
    }, {
      name: 'Yellow',
      colors: [
        { variable: 'color-yellow-0', hex: getCSSVar('color-yellow-0') },
      ],
    }, {
      name: 'Green',
      colors: [
        { variable: 'color-green-0', hex: getCSSVar('color-green-0') },
      ],
    }, {
      name: 'Blue',
      colors: [
        { variable: 'color-blue-0', hex: getCSSVar('color-blue-0') },
        { variable: 'color-blue-1', hex: getCSSVar('color-blue-1') },
        { variable: 'color-blue-2', hex: getCSSVar('color-blue-2') },
      ],
    }, {
      name: 'Blue (light)',
      colors: [
        { variable: 'color-blue-light-0', hex: getCSSVar('color-blue-light-0') },
      ],
    }, {
      name: 'Purple',
      colors: [
        { variable: 'color-purple-0', hex: getCSSVar('color-purple-0') },
      ],
    }];

    return (
      <Example name="Palette Colors">
        { palette.map(({ name, colors }, index) => [
          <Heading key={ `${index}-heading` }>{ name }</Heading>,
          <ColorSwatch colors={ colors } key={ `${index}-swatch` } />,
        ]) }
      </Example>
    );
  }
}
