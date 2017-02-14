import React from 'react';
import renderer from 'react-test-renderer';
import { IconIndicator } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <IconIndicator name="twitter" { ...props } />
  );
}

describe('IconIndicator', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color success', () => {
    const component = getComponent({ color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color warning', () => {
    const component = getComponent({ color: 'warning' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color error', () => {
    const component = getComponent({ color: 'error' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color info', () => {
    const component = getComponent({ color: 'info' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color subtle', () => {
    const component = getComponent({ color: 'subtle' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size small', () => {
    const component = getComponent({ size: 'small' });
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
