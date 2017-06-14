import React from 'react';
import renderer from 'react-test-renderer';
import { Panels, Panel } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Panels { ...props }>
      <Panel>Lorem Ipsum</Panel>
      <Panel>Lorem Ipsum</Panel>
    </Panels>
  );
}

describe('Panels', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
