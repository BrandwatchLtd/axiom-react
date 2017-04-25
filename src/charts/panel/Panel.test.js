import React from 'react';
import renderer from 'react-test-renderer';
import { Panel, PanelHeader, PanelBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Panel { ...props }>
      <PanelHeader>Lorem Ipsum</PanelHeader>
      <PanelBody>Lorem Ipsum</PanelBody>
    </Panel>
  );
}

describe('Panel', () => {
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
