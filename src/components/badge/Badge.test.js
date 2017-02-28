import React from 'react';
import renderer from 'react-test-renderer';
import { Badge } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Badge { ...props }>
      Lorem Ipsum
    </Badge>
  );
}

describe('Badge', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width', () => {
    const component = getComponent({ full: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width at small breakpoint', () => {
    const component = getComponent({ full: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width at medium breakpoint', () => {
    const component = getComponent({ full: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width at large breakpoint', () => {
    const component = getComponent({ full: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors faded', () => {
    const component = getComponent({ color: 'faded' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors highlight', () => {
    const component = getComponent({ color: 'highlight' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors success', () => {
    const component = getComponent({ color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors error', () => {
    const component = getComponent({ color: 'error' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
