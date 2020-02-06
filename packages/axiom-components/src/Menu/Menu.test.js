import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';
import MenuItem from './MenuItem';

const getComponent = (props = {}) =>
  renderer.create(
    <Menu { ...props }>
      <MenuItem>Lorem ipsum</MenuItem>
      <MenuItem>Lorem ipsum</MenuItem>
    </Menu>
  );

describe('Menu', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size medium', () => {
    const component = getComponent({ size: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size large', () => {
    const component = getComponent({ size: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
