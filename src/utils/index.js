import { Children } from 'react';

const isServer = typeof window === 'undefined';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({ type }) => type === Component);
}

export function getCSSVar(variable, context) {
  if (isServer) return;

  if (!context || context === document) {
    context = document.documentElement;
  }

  return window
    .getComputedStyle(context)
    .getPropertyValue(`--${variable}`)
    .trim();
}

export function svgDefineOnce(html) {
  if (isServer) return;

  const SVG_ELEMENT_ID = 'AxiomSvgDefs';
  let svgContainer = document.getElementById(SVG_ELEMENT_ID);

  if (!svgContainer) {
    svgContainer = document.createElement('div');
    svgContainer.setAttribute('id', SVG_ELEMENT_ID);
    svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"></svg>';
    document.body.appendChild(svgContainer);
  }

  const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  tempSvg.innerHTML = html.trim();

  if (!document.getElementById(tempSvg.firstChild.getAttribute('id'))) {
    svgContainer.querySelector('svg').appendChild(tempSvg.firstChild);
  }
}
