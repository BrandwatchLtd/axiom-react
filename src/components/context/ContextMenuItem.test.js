import React from 'react';
import renderer from 'react-test-renderer';
import { ContextMenuItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ContextMenuItem { ...props }>
      Lorem ipsum
    </ContextMenuItem>
  );
}

describe('ContextMenuItem', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with selected', () => {
    const component = getComponent({ selected: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
