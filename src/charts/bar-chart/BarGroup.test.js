import React from 'react';
import renderer from 'react-test-renderer';
import { BarGroup } from 'bw-axiom';

function getComponent(props ) {
  return renderer.create(
    <BarGroup { ...props } />
  );
}

describe('BarGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with ratio if provided', () => {
    const component = getComponent({ ratio: '45' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with label if provided', () => {
    const component = getComponent({ label: '45-53' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
