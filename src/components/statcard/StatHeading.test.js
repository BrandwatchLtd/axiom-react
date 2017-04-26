import React from 'react';
import renderer from 'react-test-renderer';
import { StatHeading } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <StatHeading { ...props }>Lorem</StatHeading>
  );
}

describe('StatHeading', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
