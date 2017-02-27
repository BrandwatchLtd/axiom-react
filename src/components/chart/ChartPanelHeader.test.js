import React from 'react';
import renderer from 'react-test-renderer';
import { ChartPanelHeader } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartPanelHeader { ...props }>Lorem Ipsum</ChartPanelHeader>
  );
}

describe('ChartPanelHeader', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
