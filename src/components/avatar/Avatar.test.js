import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from 'bw-axiom';

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
    const component = getComponent({ size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with small when less than 4.5rem', () => {
    const component = getComponent({ size: '4.4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with large when 4.5rem or more', () => {
    const component = getComponent({ size: '4.5rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
