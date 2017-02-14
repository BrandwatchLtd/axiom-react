import React from 'react';
import renderer from 'react-test-renderer';
import { IconLink } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <IconLink name="twitter" { ...props } />
  );
}

describe('IconLink', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom size', () => {
    const component = getComponent({ size: '3rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
