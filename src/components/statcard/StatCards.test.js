import React from 'react';
import renderer from 'react-test-renderer';
import { StatCards } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <StatCards { ...props }>Lorem</StatCards>
  );
}

describe('StatCards', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
