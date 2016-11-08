import React, { Component, PropTypes } from 'react';
import colors from 'bw-axiom/design-patterns/colors/_vars';
import ColorSwatchColor from './ColorSwatchColor';

if (__INCLUDE_CSS__) {
  require('./ColorSwatch.scss');
}

function hasDarkText(hex) {
  return colors.textColorMap[colors.textColorDark].includes(hex);
}

function hasLightText(hex) {
  return colors.textColorMap[colors.textColorLight].includes(hex);
}

export default class ColorSwatch extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    const { colors } = this.props;

    return (
      <div className="dm-color-swatch">
        { colors.map((color, index) =>
          <ColorSwatchColor
              color={ color }
              key={ index }
              textDark={ hasDarkText(color.hex) }
              textLight={ hasLightText(color.hex) } />
        ) }
      </div>
    );
  }
}
