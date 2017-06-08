import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableGrid from './ChartTableGrid';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTableGrid { ...props }  />
  );
}

describe('ChartTableGrid', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with count', () => {
    const component = getComponent({ count: 5 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
