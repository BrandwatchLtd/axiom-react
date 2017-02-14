import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ListItem { ...props }>Lorem Ipsum</ListItem>
  );
}

describe('ListItem', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
