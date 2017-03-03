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

  it('renders colors rose', () => {
    const component = getComponent({ color: 'rose' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors pink', () => {
    const component = getComponent({ color: 'pink' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors purple', () => {
    const component = getComponent({ color: 'purple' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors lilac', () => {
    const component = getComponent({ color: 'lilac' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors blue', () => {
    const component = getComponent({ color: 'blue' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors teal', () => {
    const component = getComponent({ color: 'teal' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors green', () => {
    const component = getComponent({ color: 'green' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors chartreuse', () => {
    const component = getComponent({ color: 'chartreuse' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors amber', () => {
    const component = getComponent({ color: 'amber' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors orange', () => {
    const component = getComponent({ color: 'orange' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors brown', () => {
    const component = getComponent({ color: 'brown' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors grey', () => {
    const component = getComponent({ color: 'grey' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity minimum 0', () => {
    const component = getComponent({ opacity: -1 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity maximum 1', () => {
    const component = getComponent({ opacity: 2 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity', () => {
    const component = getComponent({ opacity: 0.5 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
