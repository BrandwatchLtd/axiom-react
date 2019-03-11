const Color = require('color');

const getNearestColor = require('./getNearestColor');
const palette = require('./palette');

const baseColorValues = palette.base.map((color) => new Color(color).toString());

function getAmbientColor(colors) {
  const ambientColor = colors
    .map((color) => new Color(color))
    .filter((color) => !baseColorValues.includes(color.toString()) && color.luminosity() <= 0.5)
    .sort((colorA, colorB) => colorA.luminosity() - colorB.luminosity())
    .find((color) => color);

  if (ambientColor) {
    return ambientColor.toString();
  }
  return getNearestColor('#000000');
}

module.exports = getAmbientColor;
