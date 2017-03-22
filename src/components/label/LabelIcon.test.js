import React from 'react';
import renderer from 'react-test-renderer';
import { LabelIcon } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <LabelIcon { ...props } name="twitter" />
  );
}

describe('LabelIcon', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with end spacing', () => {
    const component = getComponent({ isEnd: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with start spacing', () => {
    const component = getComponent({ isStart: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color white', () => {
    const component = getComponent({ color: 'white' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color success', () => {
    const component = getComponent({ color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color error', () => {
    const component = getComponent({ color: 'error' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
