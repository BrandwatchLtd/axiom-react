import React from 'react';
import renderer from 'react-test-renderer';
import ContextMenu from './ContextMenu';
import ContextMenuItem from './ContextMenuItem';

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
