import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableRows from './ChartTableRows';
import ChartTableRow from './ChartTableRow';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTableRows { ...props } labelColumnWidth="11rem">
      <ChartTableRow>Lorem</ChartTableRow>
      <ChartTableRow>Lorem</ChartTableRow>
      <ChartTableRow>Lorem</ChartTableRow>
    </ChartTableRows>
  );
}

describe('ChartTableRows', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with collapsedVisibleRowCount more than children count', () => {
    const component = getComponent({ collapsedVisibleRowCount: 4 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with expandButtonSuffix', () => {
    const component = getComponent({ expandButtonSuffix: 'Lorem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with xAxisLabels', () => {
    const component = getComponent({ xAxisLabels: ['0%', '50%', '100%'] });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
