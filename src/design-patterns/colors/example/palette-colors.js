import React, { Component } from 'react';
import Heading from '../../../components/typography/Heading';
import colors from '../../colors/_vars';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';
import Example from 'style-guide/components/Example/Example';

export default class PaletteColors extends Component {
  render() {
    const palette = [{
      name: 'White',
      colors: [
        { variable: 'color-white-0', hex: colors.colorWhite0 },
      ],
    }, {
      name: 'Black',
      colors: [
        { variable: 'color-black-0', hex: colors.colorBlack0 },
      ],
    }, {
      name: 'Grey',
      colors: [
        { variable: 'color-grey-0', hex: colors.colorGrey0 },
        { variable: 'color-grey-1', hex: colors.colorGrey1 },
        { variable: 'color-grey-2', hex: colors.colorGrey2 },
        { variable: 'color-grey-3', hex: colors.colorGrey3 },
        { variable: 'color-grey-4', hex: colors.colorGrey4 },
        { variable: 'color-grey-5', hex: colors.colorGrey5 },
        { variable: 'color-grey-6', hex: colors.colorGrey6 },
        { variable: 'color-grey-7', hex: colors.colorGrey7 },
        { variable: 'color-grey-8', hex: colors.colorGrey8 },
        { variable: 'color-grey-9', hex: colors.colorGrey9 },
        { variable: 'color-grey-10', hex: colors.colorGrey10 },
        { variable: 'color-grey-11', hex: colors.colorGrey11 },
      ],
    }, {
      name: 'Red',
      colors: [
        { variable: 'color-red-0', hex: colors.colorRed0 },
      ],
    }, {
      name: 'Pink',
      colors: [
        { variable: 'color-pink-0', hex: colors.colorPink0 },
      ],
    }, {
      name: 'Orange',
      colors: [
        { variable: 'color-orange-0', hex: colors.colorOrange0 },
      ],
    }, {
      name: 'Orange (light)',
      colors: [
        { variable: 'color-orange-light-0', hex: colors.colorOrangeLight0 },
      ],
    }, {
      name: 'Yellow',
      colors: [
        { variable: 'color-yellow-0', hex: colors.colorYellow0 },
      ],
    }, {
      name: 'Green',
      colors: [
        { variable: 'color-green-0', hex: colors.colorGreen0 },
      ],
    }, {
      name: 'Blue',
      colors: [
        { variable: 'color-blue-0', hex: colors.colorBlue0 },
        { variable: 'color-blue-1', hex: colors.colorBlue1 },
        { variable: 'color-blue-2', hex: colors.colorBlue2 },
      ],
    }, {
      name: 'Blue (light)',
      colors: [
        { variable: 'color-blue-light-0', hex: colors.colorBlueLight0 },
      ],
    }, {
      name: 'Purple',
      colors: [
        { variable: 'color-purple-0', hex: colors.colorPurple0 },
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
