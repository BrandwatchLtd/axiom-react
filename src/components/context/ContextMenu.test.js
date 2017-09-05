import React from 'react';
import renderer from 'react-test-renderer';
import { ContextMenu, ContextMenuItem } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <ContextMenu { ...props }>
      <ContextMenuItem>Lorem ipsum</ContextMenuItem>
    </ContextMenu>
  );

describe('ContextMenu', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
