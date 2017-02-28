import React from 'react';
import renderer from 'react-test-renderer';
import { BadgeGroup, Badge } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <BadgeGroup { ...props }>
      <Badge>Lorem ipsum</Badge>
    </BadgeGroup>
  );
}

describe('BadgeGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
