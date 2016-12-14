import React, { Component } from 'react';
import Heading from '../../../components/typography/Heading';
import { getCSSVar } from '../../../utils';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';
import Example from 'style-guide/components/Example/Example';

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
