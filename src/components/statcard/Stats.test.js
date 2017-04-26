import React from 'react';
import renderer from 'react-test-renderer';
import { Stats } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Stats { ...props }>Lorem</Stats>
  );
}

describe('Stats', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
