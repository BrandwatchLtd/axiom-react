import React from 'react';
import renderer from 'react-test-renderer';
import { PanelHeader } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <PanelHeader { ...props }>Lorem Ipsum</PanelHeader>
  );

describe('PanelHeader', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
