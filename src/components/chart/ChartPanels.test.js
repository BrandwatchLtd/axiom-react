import React from 'react';
import renderer from 'react-test-renderer';
import { ChartPanels, ChartPanel } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartPanels { ...props }>
      <ChartPanel>Lorem Ipsum</ChartPanel>
      <ChartPanel>Lorem Ipsum</ChartPanel>
    </ChartPanels>
  );
}

describe('ChartPanels', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
