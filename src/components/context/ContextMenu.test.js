import React from 'react';
import renderer from 'react-test-renderer';
import { ContextMenu, ContextMenuItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ContextMenu { ...props }>
      <ContextMenuItem>Lorem ipsum</ContextMenuItem>
    </ContextMenu>
  );
}

describe('ContextMenu', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
