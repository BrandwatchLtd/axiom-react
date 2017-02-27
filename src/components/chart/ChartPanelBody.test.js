import React from 'react';
import renderer from 'react-test-renderer';
import { ChartPanelBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartPanelBody { ...props }>Lorem Ipsum</ChartPanelBody>
  );
}

describe('ChartPanelBody', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
