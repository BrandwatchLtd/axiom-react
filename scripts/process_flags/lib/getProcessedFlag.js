const jsdom = require('jsdom');

const getAmbientColor = require('./getAmbientColor');
const getNearestColor = require('./getNearestColor');

function getFill(node) {
  const fill = node.getAttribute('fill');

  if (fill) {
    if (!fill.includes('none') && !fill.includes('url')) {
      return getNearestColor(fill);
    }
  } else if (node.parentNode.tagName === 'svg') {
    return getNearestColor('#000000');
  }
}

function getStroke(node) {
  const stroke = node.getAttribute('stroke');

  if (stroke) {
    if (!stroke.includes('none')) {
      return getNearestColor(stroke);
    }
  }
}

function getProcessedSvg(input) {
  const dom = new jsdom.JSDOM(input);
  const svg = dom.window.document.querySelector('svg');
  const colors = [];

  svg.querySelectorAll('*').forEach((node) => {
    const fill = getFill(node);
    const stroke = getStroke(node);

    if (fill) {
      node.setAttribute('fill', fill);
      colors.push(fill);
    }

    if (stroke) {
      node.setAttribute('stroke', stroke);
    }
  });

  return {
    svg: svg.outerHTML,
    color: getAmbientColor(colors),
  };
}

function getProcessedFlag(input) {
  return getProcessedSvg(input);
}

module.exports = getProcessedFlag;
