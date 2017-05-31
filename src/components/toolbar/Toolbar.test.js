import React from 'react';
import renderer from 'react-test-renderer';
import { Toolbar, Tool } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <Toolbar>
      <Tool>Test</Tool>
    </Toolbar>
  );
}

describe('Toolbar', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
