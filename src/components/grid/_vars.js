const { layoutWidthSm } = require('../../design-patterns/layout/_vars');
const { containerMarginSm, containerMarginLg } = require('../../design-patterns/spacing/_vars');

module.exports = {
  gridChangePoint: layoutWidthSm,
  gridGutters: [
    { id: 'small', size: containerMarginSm, default: true },
    { id: 'large', size: containerMarginLg },
  ],
  gridWidths: [
    { id: 'half', percent: `${100 / 2}%` },
    { id: 'third', percent: `${100 / 3}%` },
    { id: 'quarter', percent: `${100 / 4}%` },
    { id: 'fifth', percent: `${100 / 5}%` },
    { id: 'sixth', percent: `${100 / 6}%` },
  ],
};
