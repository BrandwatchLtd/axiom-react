import React from 'react';
import renderer from 'react-test-renderer';
import { StatCard } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <StatCard { ...props }>Lorem</StatCard>
  );
}

describe('StatCard', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
