import React from 'react';
import renderer from 'react-test-renderer';
import { ChartPanel, ChartPanelHeader, ChartPanelBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartPanel { ...props }>
      <ChartPanelHeader>Lorem Ipsum</ChartPanelHeader>
      <ChartPanelBody>Lorem Ipsum</ChartPanelBody>
    </ChartPanel>
  );
}

describe('ChartPanel', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with minHeight', () => {
    const component = getComponent({ minimumHeight: '10rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
