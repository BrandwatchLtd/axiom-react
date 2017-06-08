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

  it('renders with labelColumnWidth', () => {
    const component = getComponent({ labelColumnWidth: '5rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without responsive', () => {
    const component = getComponent({ responsive: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
