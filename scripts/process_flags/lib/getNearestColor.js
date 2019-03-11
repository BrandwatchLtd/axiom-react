const Color = require('color');
const nearestColor = require('nearest-color');

const palette = require('./palette');

const getNearestBaseColor = nearestColor.from(palette.base);
const getNearestBrandColor = nearestColor.from(palette.brand);

function getColor(value) {
  const color = new Color(value).hsl();

  // Use nearest base color if the lightness is too dark/light
  if ((color.color[2] < 15 || color.color[2] > 85)) {
    return getNearestBaseColor(color.rgb().toString());
  }

  // Get nearest brand color
  return getNearestBrandColor(color.rgb().toString());
}

module.exports = getColor;
