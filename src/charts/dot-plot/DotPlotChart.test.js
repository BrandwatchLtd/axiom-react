import React from 'react';
import renderer from 'react-test-renderer';
import { DotPlotChart } from 'bw-axiom';

const data = [
  { label: 'Family', values: { blue: 0, lilac: 100, pink: 50 } },
  { label: 'Games', values: { blue: 90, lilac: 55, pink: 10 } },
  { label: 'Family & Parenting', values: { blue: 45, lilac: 20, pink: 80 } },
  { label: 'Technology', values: { blue: 30, lilac: 53, pink: 70 } },
  { label: 'Books', values: { blue: 60, lilac: 48, pink: 40 } },
  { label: 'Travel', values: { blue: 50, lilac: 46, pink: 54 } },
  { label: '2 stacked & 1 single', values: { blue: 40, lilac: 53, pink: 40 } },
  { label: '3 stacked', values: { blue: 50, lilac: 50, pink: 50 } },
  { label: 'Environment', values: { blue: 43, lilac: 50, pink: 55 } },
  { label: 'Music', values: { blue: 69, lilac: 41, pink: 58 } },
  { label: '1 data point', values: { blue: 69 } },
  { label: '2 data points', values: { blue: 25, lilac: 50 } },
];

const chartKey = [
  { color: 'blue', label: 'Brand A' },
  { color: 'pink', label: 'Brand B' },
  { color: 'lilac', label: 'Brand C' },
];

function createNodeMock() {
  return {
    addEventListener: () => {},
    querySelectorAll: () => [],
  };
}

function getComponent(props) {
  return renderer.create(<DotPlotChart { ...props } />, { createNodeMock });
}

describe('DotPlotChart', () => {
  it('renders with basic props', () => {
    const component = getComponent({
      chartKey,
      chartKeyLineLabel: 'test-chartKeyLineLabel',
      data,
      labelColumnWidth: '11rem',
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders as collapsible', () => {
    const component = getComponent({
      axisTitle: 'test-axisTitle',
      chartKey,
      chartKeyLineLabel: 'test-chartKeyLineLabel',
      collapsedVisibleRowCount: 6,
      data,
      expandButtonSuffix: 'test-expandButtonSuffix',
      labelColumnWidth: '11rem',
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom axis', () => {
    const component = getComponent({
      axisTitle: 'test-axisTitle',
      chartKey,
      chartKeyLineLabel: 'test-chartKeyLineLabel',
      data,
      labelColumnWidth: '11rem',
      xAxisLabels: [ '0%', '20%', '40%', '60%', '80%', '100%' ],
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
