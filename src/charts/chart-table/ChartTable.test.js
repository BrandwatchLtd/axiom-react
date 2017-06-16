import React from 'react';
import renderer from 'react-test-renderer';
import ChartTable from './ChartTable';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTable { ...props }>
      Lorem Ipsum
    </ChartTable>
  );
}

describe('ChartTable', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with even number of xAxisLabels', () => {
    const component = getComponent({ xAxisLabels: Array(10) });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with odd number of xAxisLabels', () => {
    const component = getComponent({ xAxisLabels: Array(11) });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
