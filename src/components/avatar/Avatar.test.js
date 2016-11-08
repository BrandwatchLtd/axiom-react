import React from 'react';
import Avatar from './Avatar';
import renderer from 'react-test-renderer';

function getComponent(props = {}) {
  return renderer.create(
    <Avatar src="/image/path" { ...props } />
  );
}

describe('Avatar', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom size', () => {
    const component = getComponent({ size: 50 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
